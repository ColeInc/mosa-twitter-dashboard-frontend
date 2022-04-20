import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import Post from "../models/Post";

const initialPostsState: { queue: Post[]; drafts: Post[] } = {
    queue: [
        {
            id: "1",
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nostrud et?

        t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi est consequat.`,
            media: null,
            scheduledTime: "April 14, 2022 10:30:00",
            threadId: null,
            type: "queue",
        },
        {
            id: "2",
            body: `Does anyone know if there are any specific laws in place which limit the number of cats one can own?

        Asking for a friend...`,
            media: null,
            scheduledTime: "April 14, 2022 16:02:00",
            threadId: null,
            type: "queue",
        },
        {
            id: "3",
            body: `Does a cat count as a tax write off?
        Please help. My accountant won’t answer my calls.`,
            media: null,
            scheduledTime: "April 17, 2022 16:02:00",
            threadId: null,
            type: "queue",
        },
    ],
    drafts: [
        {
            id: "1",
            body: `draft 1`,
            media: null,
            scheduledTime: "April 14, 2022 10:30:00",
            threadId: null,
            type: "draft",
        },
        {
            id: "2",
            body: `draft 2`,
            media: null,
            scheduledTime: "April 14, 2022 16:02:00",
            threadId: null,
            type: "draft",
        },
        {
            id: "3",
            body: `draft 3`,
            media: null,
            scheduledTime: "April 17, 2022 16:02:00",
            threadId: null,
            type: "draft",
        },
    ],
};

const postsSlice = createSlice({
    name: "posts",
    initialState: initialPostsState,
    reducers: {
        addPost(state, action) {
            const uuid = uuidv4();
            const media = null; // TODO: will implement condition here when upload media feature implemented
            const scheduledTime =
                action.payload.scheduledTime.length > 0
                    ? action.payload.scheduledTime.toLocaleString()
                    : new Date().toLocaleString();

            const postMetadata = {
                id: uuid,
                body: action.payload.body,
                media: media,
                scheduledTime: scheduledTime,
                threadId: null,
                type: action.payload.type,
            };
            console.log(postMetadata);

            if (action.payload.type === "queue") {
                state.queue.push(postMetadata);
            } else if (action.payload.type === "draft") {
                state.drafts.push(postMetadata);
            }
        },
        removePost(state, action) {
            const tweetToDelete = action.payload.id;

            if (action.payload.type === "queue") {
                state.queue = state.queue.filter(post => {
                    return post.id !== tweetToDelete;
                });
            } else if (action.payload.type === "draft") {
                state.drafts = state.drafts.filter(post => {
                    return post.id !== tweetToDelete;
                });
            }
        },
        updateScheduledTime(state, action) {
            const postToUpdate = action.payload.id;
        },
    },
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
