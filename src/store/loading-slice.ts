import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Loading from "../models/Loading.model";

const initialLoading: Loading = {
    loginLoading: false,
};

const loadingSlice = createSlice({
    name: "loading",
    initialState: initialLoading,
    reducers: {
        updateLoading(state: Loading, action: PayloadAction<Partial<Loading>>) {
            const updatedLoading: Loading = {
                loginLoading: action.payload.loginLoading ?? state.loginLoading,
            };
            return updatedLoading;
        },
    },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice.reducer;
