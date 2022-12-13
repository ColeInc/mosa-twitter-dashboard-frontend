/*
 Custom Hook which allows the re-usability of sending items to the queue/draft/tweet redux thunks.
*/

import { useDispatch } from "react-redux";
import { createPostDataThunk, updatePostDataThunk } from "../store/posts-actions";
import Post from "../models/Post.model";

type postType = "queue" | "drafts" | "tweet";
const postTypes = ["queue", "drafts", "tweet"];

const usePostsThunk = () => {
    const dispatch = useDispatch();

    const dispatchPost = (tweetInput: Partial<Post>, dropdownItem: string, actionType: string) => {
        console.log("coming in", tweetInput, dropdownItem, actionType);
        const charCount = tweetInput.body?.length || 0;
        const tooLong = charCount > 280 ? true : false;

        const createFn = (payload: Partial<Post>) => {
            dispatch(createPostDataThunk(payload));
        };
        const updateFn = (payload: Partial<Post>) => {
            dispatch(updatePostDataThunk(payload));
        };

        const chosenFn = actionType === "update" ? updateFn : createFn;

        const post: Partial<Post> = {
            id: tweetInput.id ? tweetInput.id : undefined,
            type: dropdownItem.toLowerCase() as postType,
            body: tweetInput.body,
            scheduledTime: new Date().toLocaleString(),
        };

        // if user input is valid AND type is TWEET OR is less than 280 chars OR if user selects DRAFT (and character length DOES NOT matter) - add tweet to Queue/Drafts array in Posts redux slice:
        if (!tooLong && postTypes.includes(dropdownItem.toLowerCase())) {
            chosenFn(post);
            return { isValid: true };
        }

        return { isValid: false };
    };
    return dispatchPost;
};

export default usePostsThunk;
