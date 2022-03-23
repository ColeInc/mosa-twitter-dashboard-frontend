import React from "react";
import classes from "./NavigationBar.module.css";

const USER_DATA = {
    name: "Billy Jimbson",
    twitterHandle: "billy_jimbson283",
    imageUrl:
        "https://lh3.googleusercontent.com/dJR03rG6P8A_sjPIdIQ0PUK956iI0Ki2S2S47WiXvuP5OuCIMrJ9GYK-uxeH5gMe3J3m-D8ikwtGyOE4gMzp2EKNxC6wgOfjhkD7OQBI0RmJVe10zpeubOq_Q8MG6AZpNPz10pp-AgM=w100-h100-p-k",
};

const NavigationBar = () => {
    return (
        <div className={classes["nav-container"]}>
            <h1>{USER_DATA.name}</h1>
            <h2>{USER_DATA.twitterHandle}</h2>
            <img
                src={USER_DATA.imageUrl}
                className={classes["profile-img"]}
                alt="profile pic"
            ></img>

            <p>Navigation Item</p>
            <p>Navigation Item</p>
            <p>Navigation Item</p>
        </div>
    );
};

export default NavigationBar;
