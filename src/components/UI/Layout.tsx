import React, { ReactElement } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import classes from "./Layout.module.scss";

const Layout: React.FC<{ children: ReactElement }> = props => {
    return (
        <main className={classes["layout__container"]}>
            <NavigationBar />
            <div className={classes["layout__horizontal-container"]}>
                <div className={classes["layout__content-container"]}>{props.children}</div>
            </div>
        </main>
    );
};

export default Layout;
