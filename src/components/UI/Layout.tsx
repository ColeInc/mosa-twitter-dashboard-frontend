import React, { ReactElement } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import classes from "./Layout.module.scss";

const Layout: React.FC<{ children: ReactElement }> = props => {
    return (
        <main className={classes["layout__container"]}>
            <div className={classes["layout__horizontal-container"]}>
                <NavigationBar />

                {props.children}
            </div>
        </main>
    );
};

export default Layout;
