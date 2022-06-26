import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./posts-slice";
import userReducer from "./user-slice";
import loadingSlice from "./loading-slice";

const store = configureStore({
    reducer: { posts: postsReducer, user: userReducer, loading: loadingSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;
