import { postsActions } from "./posts-slice";

// not re-using main "posts" interface because of mandatory "id" field:
interface PostMetadata {
    type: "queue" | "draft" | "tweet";
    threadId?: string | null;
    body: string;
    media?: string | null;
    scheduledTime: string;
}

export const sendPostData = (tweetData: PostMetadata) => {
    return async (dispatch: any) => {
        // send post directly to API to tweet it:
        if (tweetData.type === "tweet") {
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

export const deleteTweet = (tweet: { id: string; type: string }) => {
    return async (dispatch: any) => {
        dispatch(postsActions.removePost(tweet));
    };
};
