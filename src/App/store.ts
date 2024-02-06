import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import authReducer from "./authTokenSlice";

export default configureStore({
    reducer: {
        authToken: authReducer,
        weatherData: weatherReducer
    }
});