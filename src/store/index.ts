import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./posts";

const store = configureStore({
    reducer: { posts: postsReducer },
});

export default store;
