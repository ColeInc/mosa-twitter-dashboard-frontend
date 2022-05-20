/*
 Custom Hook which allows the re-usability of sending items to the queue/draft/tweet redux thunks.
*/

import { useDispatch } from "react-redux";
import { addPostDataThunk, updatePostDataThunk, deleteTweetThunk } from "../store/posts-actions";
import PostMetadata from "../models/PostMetadata";

type postType = "queue" | "drafts" | "tweet";

const usePostsThunk = () => {
    const dispatch = useDispatch();

    const dispatchPost = (tweetInput: PostMetadata, dropdownItem: string, actionType: string) => {
        const charCount = tweetInput.body?.length || 0;
        const tooLong = charCount > 280 ? true : false;

        const addFn = (payload: PostMetadata) => {
            dispatch(addPostDataThunk(payload));
        };
        const updateFn = (payload: PostMetadata) => {
            dispatch(updatePostDataThunk(payload));
        };

        const chosenFn = actionType === "update" ? updateFn : addFn;

        const post: PostMetadata = {
            id: tweetInput.id ? tweetInput.id : undefined,
            type: dropdownItem.toLowerCase() as postType,
            body: tweetInput.body,
            scheduledTime: new Date().toLocaleString(),
        };

        // if user selects QUEUE and tweet is less than 280 chars, add tweet to "posts" redux slice:
        if (!tooLong && dropdownItem.toLowerCase() === "queue") {
            chosenFn(post);
            return { isValid: true };
        }
        // if user is moving post from QUEUE to DRAFTS while UPDATING the post:
        else if (tweetInput.type === "queue" && dropdownItem.toLowerCase() === "draft" && actionType === "update") {
            // remove from queue
            deleteTweetThunk(tweetInput);
            // add new post to draft (but keep original post ID):
            addPostDataThunk(post);
        }
        // if user selects DRAFT (and character length does not matter), add tweet to "drafts" list in redux slice:
        else if (dropdownItem.toLowerCase() === "draft") {
            chosenFn(post);
            return { isValid: true };
        }
        // if user input is valid, tweet instantly:
        else if (!tooLong && dropdownItem.toLowerCase() === "tweet") {
            // TODO: HTTP request to backend for instant tweet here

            return { isValid: true };
        }

        return { isValid: false };
    };
    return dispatchPost;
};

export default usePostsThunk;
