import React, { useState } from "react";
import classes from "./FormDropdown.module.scss";
import RightChevron from "../../assets/icons/noun-right-chevron-4695692.svg";

interface FormDropDownProps {
    defaultValue: string;
    data: { id: number; label: string }[];
}
// const data =

const FormDropdown = ({ defaultValue, data }: FormDropDownProps) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const toggleDropdown = () => setOpen(s => !s);

    // const handleItemClick = (id: number) => {
    const handleItemClick = (id: string | null = null) => {
        // console.log("e.target.id", id.getAttribute("id"));
        selectedItem === id ? setSelectedItem(null) : setSelectedItem(+id!);
    };

    return (
        <div className={classes["form-dropdown"]}>
            <div className={classes["form-dropdown__header"]} onClick={toggleDropdown}>
                {selectedItem ? items.find(item => item.id === selectedItem)!.label : defaultValue}
                {/* <i className={`fa fa-chevron-right ${classes.icon} ${isOpen && classes.open}`}></i> */}
                <div
                    className={`${classes.icon} ${classes["form-dropdown__chevron-wrapper"]} ${isOpen && classes.open}`}
                >
                    <RightChevron />
                </div>
            </div>
            <div className={`${classes["form-dropdown__body"]} ${isOpen && classes.open}`}>
                {items.map(item => (
                    <div
                        className={classes["form-dropdown__item"]}
                        onClick={e => handleItemClick((e.target as HTMLDivElement).getAttribute("id"))}
                        id={item.id.toString()}
                        key={item.id}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormDropdown;
