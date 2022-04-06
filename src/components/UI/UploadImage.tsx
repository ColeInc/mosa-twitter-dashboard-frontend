import React from "react";
import classes from "./UploadImage.module.css";
import { ReactComponent as UploadIcon } from "../../assets/icons/noun-upload-1016080.svg";

const UploadImage = () => {
    return (
        <div className={classes["upload-image__container"]}>
            <UploadIcon />
            <h1>UPLOAD IMAGE OR VIDEO</h1>
        </div>
    );
};

export default UploadImage;
