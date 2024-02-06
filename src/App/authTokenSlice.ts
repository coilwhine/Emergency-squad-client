import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenModel } from "../Models/auth-models";
import { jwtDecode } from "jwt-decode";

let token = window.localStorage.getItem('squadAuthToken');
let initialState = null;

if (token) {
    try {
        let userToken = jwtDecode<TokenModel>(token);

        initialState = {
            sub: userToken.sub,
            firstName: userToken.firstName,
            lastName: userToken.lastName,
            email: userToken.email,
            image: userToken.image
        };

    } catch (error) {
        window.localStorage.removeItem('squadAuthToken')
    }
}

export const authTokenSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            const userNewToken = jwtDecode<TokenModel>(action.payload);
            state = {
                sub: userNewToken.sub,
                firstName: userNewToken.firstName,
                lastName: userNewToken.lastName,
                email: userNewToken.email,
                image: userNewToken.image
            } as TokenModel
            window.localStorage.setItem('squadAuthToken', action.payload)
            return state
        },

        logout: () => {
            window.localStorage.removeItem('squadAuthToken')
            return null
        }
    }
})

export const { login, logout } = authTokenSlice.actions

export default authTokenSlice.reducer