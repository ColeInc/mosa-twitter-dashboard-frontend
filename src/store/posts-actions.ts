import moment from "moment";
import { RootState } from "./index";
import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import Post from "../models/Post.model";

export const createPostDataThunk = createAsyncThunk(
    "posts/createPostDataThunk",
    async (tweetData: Partial<Post>, thunkAPI) => {
        // If user wants to tweet right now, send post directly to API to tweet it:
        if (tweetData.type === "tweet") {
            try {
                // TODO: send request to createTweet backend API
                // HERE
            } catch (error) {}
        }
        // else, post is for Queue/Draft so send to backend for persistant storage:
        else {
            try {
                // TODO: send request to backend Queue/Draft API to store persistently:
                // HERE
            } catch (error) {}
        }
        return tweetData;
    }
);

export const updatePostDataThunk = createAsyncThunk(
    "posts/updatePostDataThunk",
    async (tweetData: Partial<Post>, thunkAPI) => {
        console.log("gets here 1");
        try {
            // TODO: send PATCH request to backend to store tweet persistently:
            // HERE
        } catch (error) {}

        return tweetData;
    }
);

export const deleteTweetThunk = createAsyncThunk(
    "posts/deleteTweetThunk",
    async (tweetData: Partial<Post>, thunkAPI) => {
        try {
            // TODO: send DELETE request to remove post from backend
            // HERE
        } catch (error) {}

        return tweetData;
    }
);

// QUEUE - createSelector function to efficiently sort the QUEUE by scheduled time only upon change in data stored:
export const sortQueuePosts = createSelector(
    (state: RootState) => state.posts.storage.queue,
    queue => {
        const deepCopy = [...queue];
        deepCopy.sort((a, b) => moment(a.scheduledTime).diff(moment(b.scheduledTime)));
        return deepCopy;
    }
);

// DRAFTS - createSelector function to efficiently sort the DRAFTS by scheduled time only upon change in data stored:
export const sortDraftPosts = createSelector(
    (state: RootState) => state.posts.storage.drafts,
    drafts => {
        const deepCopy = [...drafts];
        deepCopy.sort((a, b) => moment(a.scheduledTime).diff(moment(b.scheduledTime)));
        return deepCopy;
    }
);
