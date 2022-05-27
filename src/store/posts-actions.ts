import { postsActions } from "./posts-slice";
import { RootState } from "./index";
import { createSelector } from "@reduxjs/toolkit";
import moment from "moment";
// not re-using main "posts" interface because it requires a mandatory "id" field:
import PostMetadata from "../models/PostMetadata.model";

export const addPostDataThunk = (tweetData: PostMetadata) => {
    return async (dispatch: any) => {
        // send post directly to API to tweet it:
        if (tweetData.type === "tweet") {
            // TODO: send request to createTweet backend API
        }
        // else, send to backend + store in redux slice:
        else {
            // TODO: send request to backend to store tweet persistently:
            // HERE

            // store tweet in redux slice:
            dispatch(postsActions.addPost(tweetData));
        }
    };
};

export const updatePostDataThunk = (tweetData: PostMetadata) => {
    return async (dispatch: any) => {
        // TODO: send PATCH request to backend to store tweet persistently:

        dispatch(postsActions.removePost(tweetData));
        dispatch(postsActions.addPost(tweetData));
        // dispatch(postsActions.updatePost(tweetData));
    };
};

export const deleteTweetThunk = (tweetData: PostMetadata) => {
    return async (dispatch: any) => {
        // TODO: send DELETE request to remove post from backend

        dispatch(postsActions.removePost(tweetData));
    };
};

// move a tweet from Drafts to Queue, or vice versa:
export const toggleDraftThunk = (tweet: PostMetadata) => {
    return async (dispatch: any) => {
        const newType = tweet.type === "queue" ? "drafts" : "queue";
        dispatch(postsActions.removePost(tweet));
        dispatch(postsActions.addPost({ ...tweet, type: newType }));

        // TODO: call updatePost API to update tweet from draft to queue in backend (or vice versa):
    };
};

// QUEUE - createSelector function to efficiently sort the QUEUE by scheduled time only upon change in data stored:
export const sortQueuePosts = createSelector(
    (state: RootState) => state.posts.queue,
    queue => {
        const deepCopy = [...queue];
        deepCopy.sort((a, b) => moment(a.scheduledTime).diff(moment(b.scheduledTime)));
        return deepCopy;
    }
);

// DRAFTS - createSelector function to efficiently sort the DRAFTS by scheduled time only upon change in data stored:
export const sortDraftPosts = createSelector(
    (state: RootState) => state.posts.drafts,
    drafts => {
        const deepCopy = [...drafts];
        deepCopy.sort((a, b) => moment(a.scheduledTime).diff(moment(b.scheduledTime)));
        return deepCopy;
    }
);
