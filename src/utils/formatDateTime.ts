import moment from "moment";

export const formatDateTime = (dateToFormat: string) => {
    const momentDateToFormat = moment(dateToFormat);
    const diff = momentDateToFormat.diff(moment(), "days");
    const timeStr = "h:mma";
    const dateStr = diff >= 7 ? "dddd, Do MMM" : "dddd";

    const formattedTime = momentDateToFormat.format(timeStr);
    const formattedDate = momentDateToFormat.format(dateStr);
    return [formattedTime, formattedDate];
};
