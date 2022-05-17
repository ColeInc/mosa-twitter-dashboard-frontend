import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import Post from "../models/Post";
import PostMetadata from "../models/PostMetadata";

interface InitialPosts {
    queue: Post[];
    drafts: Post[];
}

// const initialPostsState: InitialPosts = {
//     queue: [],
//     drafts: [],
// };

const initialPostsState: InitialPosts = {
    queue: [
        {
            id: "1",
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nostrud et?

        t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi est consequat.`,
            media: null,
            scheduledTime: "May 14, 2022 10:30:00",
            threadId: null,
            type: "queue",
        },
        {
            id: "2",
            body: `Does anyone know if there are any specific laws in place which limit the number of cats one can own?

        Asking for a friend...`,
            media: null,
            scheduledTime: "May 10, 2022 02:30:00",
            threadId: null,
            type: "queue",
        },
        {
            id: "3",
            body: `Does a cat count as a tax write off?
        Please help. My accountant won’t answer my calls.`,
            media: null,
            scheduledTime: "July 12, 2022 16:30:00",
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
            type: "drafts",
        },
        {
            id: "2",
            body: `draft 2`,
            media: null,
            scheduledTime: "April 14, 2022 16:02:00",
            threadId: null,
            type: "drafts",
        },
        {
            id: "3",
            body: `draft 3`,
            media: null,
            scheduledTime: "April 17, 2022 16:02:00",
            threadId: null,
            type: "drafts",
        },
    ],
};

const postsSlice = createSlice({
    name: "posts",
    initialState: initialPostsState,
    reducers: {
        addPost(state: InitialPosts, action: PayloadAction<PostMetadata>) {
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

            state[action.payload.type as keyof InitialPosts].push(postMetadata);
        },
        updatePost(state: InitialPosts, action: PayloadAction<PostMetadata>) {
            console.log(action);
            const tweetId = action.payload.id;
            const media = action.payload.media;
            const scheduledTime =
                action.payload.scheduledTime.length > 0
                    ? action.payload.scheduledTime.toLocaleString()
                    : new Date().toLocaleString();

            const forgedPost = {
                id: tweetId,
                body: action.payload.body,
                media: media,
                scheduledTime: scheduledTime,
                threadId: null,
                type: action.payload.type,
            };

            // if its queue, delete it from queue and add to drafts
            // if its drafts, delete it from drafts and add to queue
            // but to find if its queue or drafts need to iterate both?
            // no. we could just remove it via remotePost then add via addPost.. at thunk lvl would just need to fetch all post data first
            // nahhh we need to split the moveToDrafts functionality out. have this as generic updatePost for pure updates, and offload the array switchhing to more infficient palce elsewhere

            const index = action.payload.type as keyof InitialPosts;
            const foundIndex = state[index].findIndex((item: Post) => item.id === tweetId);
            state[index][foundIndex] = forgedPost as Post;
            // TODO: need to make some kind of safety check to make sure we aren't setting type queue to draft but still storing it in queue array ya know (and vice versa )
        },
        removePost(state: InitialPosts, action: PayloadAction<PostMetadata>) {
            const tweetToDelete = action.payload.id;

            const index = action.payload.type as keyof InitialPosts;

            state[index] = state[index].filter((post: Post) => {
                return post.id !== tweetToDelete;
            });
        },
        // updateScheduledTime(state, action) {
        //     const postToUpdate = action.payload.id;
        // },
    },
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
