import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";

// const initialUser: User = {
//     id: "1",
//     name: "default user",
//     twitterHandle: "default user handle",
//     imageUrl: "",
// };

const initialUser: User = {
    id: "1",
    name: "Billy Jimbson",
    twitterHandle: "billy_jimbson283",
    imageUrl:
        "https://lh3.googleusercontent.com/dJR03rG6P8A_sjPIdIQ0PUK956iI0Ki2S2S47WiXvuP5OuCIMrJ9GYK-uxeH5gMe3J3m-D8ikwtGyOE4gMzp2EKNxC6wgOfjhkD7OQBI0RmJVe10zpeubOq_Q8MG6AZpNPz10pp-AgM",
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUser,
    reducers: {
        updateUser(state: User, action: PayloadAction<User>) {
            const updatedUser = {
                id: action.payload.id ?? state.id,
                name: action.payload.name ?? state.name,
                twitterHandle: action.payload.twitterHandle ?? state.twitterHandle,
                imageUrl: action.payload.imageUrl ?? state.imageUrl,
            };

            state = updatedUser;
        },
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
