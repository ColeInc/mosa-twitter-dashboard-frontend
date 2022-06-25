import useLogout from "../hooks/use-logout";
import classes from "./Settings.module.css";

const Settings = () => {
    const logMeOut = useLogout();
    const deleteMe = () => {
        const url = "/api/v1/posts";

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
            .then(result => console.log("posts resp:", result));
    };

    return (
        <div>
            Settings
            <button onClick={logMeOut()} className={classes["settings__button"]}>
                LOG OUT
            </button>
            <br />
            <button onClick={deleteMe} className={classes["login__twitter-button"]}>
                <p>get Posts</p>
            </button>
        </div>
    );
};

export default Settings;
