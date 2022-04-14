interface Post {
    id: string;
    threadId: string | null;
    body: string;
    media: string | null;
    scheduledTime: Date;
}

export default Post;
