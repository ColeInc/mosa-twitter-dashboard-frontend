import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
import { loadingActions } from "../store/loading-slice";

const usePersistLogin = () => {
    const dispatch = useDispatch();

    const checkRefreshToken = () => {
        console.log("starting checkRefreshToken:");
        dispatch(loadingActions.updateLoading({ loginLoading: true }));

        const url = "/api/v1/login/refresh_token";

        fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            redirect: "follow",
        })
            .then(response => response.json())
            .then(result => {
                console.log("persistLogin repsonse:");
                console.log(result);
                if (result.success) {
                    // TODO: extract JWT token & user info here, store it into user slice
                    const { userData } = result;
                    console.log("step 3 result @ frontend", result);

                    // update user slice with user's successful login data:
                    dispatch(
                        userActions.updateUser({
                            id: userData.id,
                            name: userData.name ?? undefined,
                            twitterHandle: userData.username ?? undefined,
                            imageUrl: userData.profile_image_url ?? undefined,
                            loggedIn: true,
                        })
                    );
                    // stop loading animation:
                    dispatch(loadingActions.updateLoading({ loginLoading: false }));
                } else {
                    console.log("jwt token wasn't valid from old session, user has to login from scratch");
                    // stop loading animation:
                    dispatch(loadingActions.updateLoading({ loginLoading: false }));
                }
            })
            .catch(error => {
                console.log("Error while authenticating user:\n", error);
            });
    };

    return checkRefreshToken;
};

export default usePersistLogin;
