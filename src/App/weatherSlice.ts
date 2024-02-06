import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState = null;

export const weatherSlice = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {
        getWeather: (state, action: PayloadAction<WeatherData>) => {
            state = action.payload;
            return state;
        }
    }
})

export const { getWeather } = weatherSlice.actions
export default weatherSlice.reducer