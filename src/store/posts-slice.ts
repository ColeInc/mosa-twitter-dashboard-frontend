import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import Post from "../models/Post.model";
import { createPostDataThunk, updatePostDataThunk, deleteTweetThunk } from "./posts-actions";

interface InitialPostsState {
    storage: {
        queue: Post[];
        drafts: Post[];
    };
    loading: boolean;
}

// const initialPostsState: InitialPosts = {
//     queue: [],
//     drafts: [],
// };

const initialPostsState: InitialPostsState = {
    storage: {
        queue: [
            {
                id: "1",
                body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nostrud et?

        t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi est consequat.`,
                media: null,
                scheduledTime: "June 10, 2022 10:30:00",
                threadId: null,
                type: "queue",
            },
            {
                id: "2",
                body: `Does anyone know if there are any specific laws in place which limit the number of cats one can own?

        Asking for a friend...`,
                media: null,
                scheduledTime: "May 21, 2022 17:00:00",
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
            {
                id: "1",
                body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nostrud et?

        t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi est consequat.`,
                media: null,
                scheduledTime: "June 10, 2022 10:30:00",
                threadId: null,
                type: "queue",
            },
            {
                id: "2",
                body: `Does anyone know if there are any specific laws in place which limit the number of cats one can own?

        Asking for a friend...`,
                media: null,
                scheduledTime: "May 21, 2022 17:00:00",
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
    },
    loading: false,
};

const postsSlice = createSlice({
    name: "posts",
    initialState: initialPostsState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createPostDataThunk.pending, state => {
                // Creation of new Post is in progress / loading:
                state.loading = true;
            })
            .addCase(createPostDataThunk.fulfilled, (state, action) => {
                state.loading = false;

                // If the user has selected "tweet now", we just tweet it instantly and don't need to store in redux
                if (!action.payload || action.payload.type === "tweet") {
                    console.log("No payload received at createPost reducer function!");
                    return;
                }

                const uuid = action.payload.id ? action.payload.id : uuidv4();
                const media = null; // TODO: will implement condition here when upload media feature implemented
                const scheduledTime =
                    action.payload.scheduledTime && action.payload.scheduledTime.length > 0
                        ? action.payload.scheduledTime.toLocaleString()
                        : new Date().toLocaleString();
                const type = action.payload.type ?? "queue";

                const newPost: Post = {
                    id: uuid,
                    body: action.payload.body ?? "",
                    media,
                    scheduledTime,
                    threadId: null,
                    type,
                };

                // Determining whether post is for Queue or Drafts (by looking at the "type" field passed in payload):
                const typeOfPost = action.payload.type as keyof InitialPostsState["storage"];
                state.storage[typeOfPost].push(newPost);

                console.log("final createPost STATE");
                console.log(newPost);
            })
            .addCase(createPostDataThunk.rejected, (state, action) => {
                //TODO: send notification to notification slice here informing user post failed to be created.
                state.loading = false;
                // state.error = action.payload.message;
            })
            .addCase(updatePostDataThunk.pending, state => {
                state.loading = true;
            })
            .addCase(updatePostDataThunk.fulfilled, (state, action) => {
                console.log("post coming in:", action.payload);
                let originalPostType = "";
                const postId = action?.payload?.id;
                const updatedPostType = action?.payload?.type;

                // first check if it's in queue currently:
                // if (state.storage.queue.some(item => item.id === postId)) {
                const queueSearch = state.storage.queue.findIndex(item => item.id === postId);
                let draftsSearch = -1;

                // If we find the item in our queue array assign it to queue type:
                if (queueSearch > -1) {
                    originalPostType = "queue";
                }
                // else if post not found in Queue array, search Drafts array:
                else {
                    draftsSearch = state.storage.drafts.findIndex(item => item.id === postId);

                    // If we find the item in our drafts array, assign it to draft type:
                    if (draftsSearch > -1) {
                        originalPostType = "drafts";
                    } else {
                        // RAISE ERROR - Post not found in Queue or Drafts.
                        console.log("Post was not found in existing redux state!");
                    }
                }

                const postIndex = Math.max(queueSearch, draftsSearch);

                // If we find that this post is moving from queue to drafts OR drafts to queue:
                if (originalPostType !== updatedPostType) {
                    // First delete it by ID from the original  redux state array:
                    let currentPostsArray = state.storage[originalPostType as keyof typeof initialPostsState.storage];
                    currentPostsArray.splice(postIndex, 1);
                    // then append it to bottom of the new array we're switching to:
                    state.storage[updatedPostType as keyof typeof initialPostsState.storage].push(
                        action.payload as Post
                    );
                }
                // else, update the post in Queue/Drafts like normal:
                else {
                    state.storage[updatedPostType as keyof typeof initialPostsState.storage][postIndex] = {
                        ...state.storage[updatedPostType as keyof typeof initialPostsState.storage][postIndex],
                        ...action.payload,
                    };
                }

                state.loading = false;

                console.log("final Updated Post STATE");
                console.log(state.storage[updatedPostType as keyof typeof initialPostsState.storage][postIndex]);
            })
            .addCase(updatePostDataThunk.rejected, state => {
                state.loading = false;
            })
            .addCase(deleteTweetThunk.pending, state => {
                state.loading = true;
            })
            .addCase(deleteTweetThunk.fulfilled, (state, action) => {
                const postId = action?.payload?.id;
                const postType = action?.payload?.type;

                let currentPostsArray = state.storage[postType as keyof typeof initialPostsState.storage];
                const index = currentPostsArray.findIndex(item => item.id === postId);
                currentPostsArray.splice(index, 1);

                state.loading = false;
            })
            .addCase(deleteTweetThunk.rejected, state => {
                state.loading = false;
            });
    },
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
