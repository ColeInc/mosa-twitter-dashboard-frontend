import moment from "moment";
import Post from "../models/Post.model";

interface GroupedPosts {
    [key: string]: Post[];
}

export const groupPostsByDay = (posts: Post[]) => {
    const groupedData: GroupedPosts = {};

    // Extract the "scheduledTime" field out of each Post, convert it to YYYY-MM-DD format, then group all posts into each corresponding day:
    posts.forEach(post => {
        const formattedDate = moment(post.scheduledTime).startOf("day").format("YYYY-MM-DD");
        if (!groupedData[formattedDate]) {
            groupedData[formattedDate] = [];
        }
        groupedData[formattedDate].push(post);
    });
    return groupedData;
};
