import { loadingActions } from "../store/loading-slice";
import { userActions } from "../store/user-slice";
import { useDispatch } from "react-redux";

const useLogout = () => {
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(loadingActions.updateLoading({ loginLoading: true }));

        dispatch(userActions.logout());

        const url = "/api/v1/login/logout";

        fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            redirect: "follow",
        });

        // could optimise this by moving before http call above:
        dispatch(loadingActions.updateLoading({ loginLoading: false }));
    };
    return () => logoutUser;
};

export default useLogout;
