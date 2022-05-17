import { postsActions } from "./posts-slice";
// not re-using main "posts" interface because of mandatory "id" field:
import PostMetadata from "../models/PostMetadata";

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
    };
};

export const deleteTweetThunk = (tweetData: PostMetadata) => {
    return async (dispatch: any) => {
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
