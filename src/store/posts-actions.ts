import moment from "moment";
import { RootState } from "./index";
import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import Post from "../models/Post.model";

const defaultReqConfig: RequestInit = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    redirect: "follow",
    credentials: "same-origin",
};

export const createPostDataThunk = createAsyncThunk(
    "posts/createPostDataThunk",
    async (tweetData: Partial<Post>, thunkAPI) => {
        // Send request to backend Create Tweet/Queue/Draft API to store persistently:
        try {
            const repsonse = await fetch("/api/v1/posts", {
                ...defaultReqConfig,
                method: "POST",
                body: JSON.stringify(tweetData),
            });
            const result = await repsonse.json();

            // If tweet successfully created in backend, get the UUID generated in db and use this for corresponding post in redux:
            if (result.success) {
                tweetData.id = result.id;
                console.log("CREATE: tweet going to posts-slice:", tweetData);
                return tweetData;
            } else {
                throw new Error("Failed to tweet/queue/draft post in backend");
            }
        } catch (error) {
            console.log("Failed to tweet/queue/draft post in backend.\n", error);
        }
    }
);

export const updatePostDataThunk = createAsyncThunk(
    "posts/updatePostDataThunk",
    async (tweetData: Partial<Post>, thunkAPI) => {
        // Send PATCH request to update post in backend:
        const postId = tweetData.id;

        try {
            const repsonse = await fetch(`/api/v1/posts/${postId}`, {
                ...defaultReqConfig,
                method: "PATCH",
                body: JSON.stringify(tweetData),
            });
            const result = await repsonse.json();

            // If tweet successfully created in backend, get the UUID generated in db and use this for corresponding post in redux:
            if (result.success) {
                console.log("UPDATE: tweet going to posts-slice:", tweetData);
                return tweetData;
            } else {
                throw new Error("Failed to Update post in backend");
            }
        } catch (error) {
            console.log("Failed to Update Post in backend.\n", error);
        }
    }
);

export const deleteTweetThunk = createAsyncThunk(
    "posts/deleteTweetThunk",
    async (tweetData: Partial<Post>, thunkAPI) => {
        // Send DELETE request to remove post from backend:
        const postId = tweetData.id;

        try {
            const repsonse = await fetch(`/api/v1/posts/${postId}`, {
                ...defaultReqConfig,
                method: "DELETE",
            });
            const result = await repsonse.json();

            // If tweet successfully created in backend, get the UUID generated in db and use this for corresponding post in redux:
            if (result.success) {
                console.log("DELETE: tweet going to posts-slice:", tweetData);
                return tweetData;
            } else {
                throw new Error("Failed to Delete post in backend");
            }
        } catch (error) {
            console.log("Failed to Delete Post in backend.\n", error);
        }
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
