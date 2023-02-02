import React, { useState } from "react";
import classes from "./QueueConfigPanel.module.scss";
import Dropdown from "../UI/Dropdown";
import GlobeIcon from "../../assets/icons/globe_icon.svg";
import ShuffleIcon from "../../assets/icons/shuffle_icon.svg";

const timezones = [
    "(GMT -12:00) Eniwetok, Kwajalein",
    "(GMT -11:00) Midway Island, Samoa",
    "(GMT -10:00) Hawaii",
    "(GMT -9:30) Taiohae",
    "(GMT -9:00) Alaska",
    "(GMT -8:00) Pacific Time (US & Canada)",
    "(GMT -7:00) Mountain Time (US & Canada)",
    "(GMT -6:00) Central Time (US & Canada), Mexico City",
    "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima",
    "(GMT -4:30) Caracas",
    "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz",
    "(GMT -3:30) Newfoundland",
    "(GMT -3:00) Brazil, Buenos Aires, Georgetown",
    "(GMT -2:00) Mid-Atlantic",
    "(GMT -1:00) Azores, Cape Verde Islands",
    "(GMT) Western Europe Time, London, Lisbon, Casablanca",
    "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris",
    "(GMT +2:00) Kaliningrad, South Africa",
    "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg",
    "(GMT +3:30) Tehran",
    "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi",
    "(GMT +4:30) Kabul",
    "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent",
    "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi",
    "(GMT +5:45) Kathmandu, Pokhara",
    "(GMT +6:00) Almaty, Dhaka, Colombo",
    "(GMT +6:30) Yangon, Mandalay",
    "(GMT +7:00) Bangkok, Hanoi, Jakarta",
    "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong",
    "(GMT +8:45) Eucla",
    "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
    "(GMT +9:30) Adelaide, Darwin",
    "(GMT +10:00) Eastern Australia, Guam, Vladivostok",
    "(GMT +10:30) Lord Howe Island",
    "(GMT +11:00) Magadan, Solomon Islands, New Caledonia",
    "(GMT +11:30) Norfolk Island",
    "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka",
    "(GMT +12:45) Chatham Islands",
    "(GMT +13:00) Apia, Nukualofa",
    "(GMT +14:00) Line Islands, Tokelau",
];

const timesOfDay = [
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
];

const QueueConfigPanel = () => {
    const [dropdownTimesPerDay, setDropdownTimesPerDay] = useState("7");
    const [dropdownStartTime, setDropdownStartTime] = useState("3am");
    const [dropdownEndTime, setDropdownEndTime] = useState("10pm");
    const [dropdownTimezone, setDropdownTimezone] = useState("(GMT) Europe/London");

    // PAUSE ALL switch useState:
    const [pauseQueueChecked, setPauseQueueChecked] = useState(false);

    return (
        <div className={classes["queue-panel__container"]}>
            <h1>QUEUE SETTINGS</h1>
            <div className={classes.line} style={{ marginBottom: "10px" }}>
                <p>Tweet from queue&nbsp;</p>
                <Dropdown
                    items={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
                    currentItem={dropdownTimesPerDay}
                    onDropdownClick={setDropdownTimesPerDay}
                />
                <p>&nbsp;times a day</p>
            </div>
            <div className={classes.line}>
                <p>between&nbsp;</p>
                <Dropdown items={timesOfDay} currentItem={dropdownStartTime} onDropdownClick={setDropdownStartTime} />
                <p>&nbsp;and&nbsp;</p>
                <Dropdown items={timesOfDay} currentItem={dropdownEndTime} onDropdownClick={setDropdownEndTime} />
            </div>
            <div className={classes["queue-panel__divider"]} />
            <h2>TIMEZONE</h2>
            <Dropdown
                items={timezones}
                currentItem={dropdownTimezone}
                onDropdownClick={setDropdownTimezone}
                icon={<GlobeIcon />}
            />
            <div className={classes["queue-panel__shuffle-button"]}>
                <ShuffleIcon />
                <p>SHUFFLE</p>
            </div>
            <div className={classes["queue-panel__divider"]} />
            <div className={classes["queue-panel__pause-button"]}>
                <p>PAUSE ALL</p>
                <input
                    id="pause-switch"
                    className={classes.switch}
                    type="checkbox"
                    checked={pauseQueueChecked}
                    onChange={() => setPauseQueueChecked(!pauseQueueChecked)}
                />
                <label htmlFor="pause-switch"></label>
            </div>
        </div>
    );
};

export default QueueConfigPanel;
