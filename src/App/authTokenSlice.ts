import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../Models/auth-models";

let initialState = null;

export const authTokenSlice = createSlice({
    name: 'authData',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserModel>) => {

            state = {
                googleId: action.payload.googleId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                image: action.payload.image,
                accessToken: action.payload.accessToken
            }

            window.localStorage.setItem("squadUserData", JSON.stringify(action.payload));
            return state;
        },

        logout: (state) => {
            window.localStorage.removeItem('squadUserData');
            state = null;
            return state;
        }
    }
});

export const { login, logout } = authTokenSlice.actions

export default authTokenSlice.reducer