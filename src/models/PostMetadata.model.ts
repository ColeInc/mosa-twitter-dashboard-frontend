interface PostMetadata {
    id?: string;
    threadId?: string;
    type: "queue" | "drafts" | "tweet";
    body: string;
    media?: string;
    scheduledTime: string;
}

export default PostMetadata;
