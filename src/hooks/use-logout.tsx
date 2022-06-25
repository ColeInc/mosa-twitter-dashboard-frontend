import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";

const useLogout = () => {
    const dispatch = useDispatch();

    const logoutUser = () => {
        console.log("starting logout...");

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
    };
    return () => logoutUser;
};

export default useLogout;
