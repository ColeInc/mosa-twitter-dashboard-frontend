import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./posts-slice";
import userReducer from "./user-slice";

const store = configureStore({
    reducer: { posts: postsReducer, user: userReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;
