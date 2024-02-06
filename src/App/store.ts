import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import authReducer from "./authTokenSlice";

export default configureStore({
    reducer: {
        authData: authReducer,
        weatherData: weatherReducer
    }
});