import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import Post from "../models/Post";

const initialPostsState: { posts: Post[] } = {
    posts: [
        {
            id: "1",
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nostrud et?

        t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi est consequat.`,
            media: null,
            scheduledTime: new Date("April 14, 2022 10:30:00"),
            threadId: null,
        },
        {
            id: "2",
            body: `Does anyone know if there are any specific laws in place which limit the number of cats one can own?

        Asking for a friend...`,
            media: null,
            scheduledTime: new Date("April 14, 2022 16:02:00"),
            threadId: null,
        },
        {
            id: "3",
            body: `Does a cat count as a tax write off?
        Please help. My accountant won’t answer my calls.`,
            media: null,
            scheduledTime: new Date("April 17, 2022 16:02:00"),
            threadId: null,
        },
    ],
};

const postsSlice = createSlice({
    name: "posts",
    initialState: initialPostsState,
    reducers: {
        addPost(state, action) {
            const uuid = uuidv4();

            state.posts.push({
                id: uuid,
                body: action.payload.body,
                media: action.payload.media,
                scheduledTime: action.payload.scheduledTime,
                threadId: null,
            });
        },
        removePost(state, action) {
            const postToDelete = action.payload;

            state.posts.filter((post) => {
                return post.id !== postToDelete;
            });
        },
    },
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
