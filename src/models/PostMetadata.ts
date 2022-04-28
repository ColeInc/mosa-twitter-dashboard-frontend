interface PostMetadata {
    id?: string;
    type: "queue" | "drafts" | "tweet";
    threadId?: string;
    body: string;
    media?: string;
    scheduledTime: string;
}

export default PostMetadata;
