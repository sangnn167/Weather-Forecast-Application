import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice  = createSlice({
  name: "weather",
  initialState: {
    temperatureUnit: "metric",
    city: "Hà Nội",
    currentWeather: null,
    forecast: [],
    loading: true,
   
  },
  reducers: {
    setTemperatureUnit: (state, action) => {
      state.temperatureUnit = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCurrentWeather: (state,action) => {
        state.currentWeather = action.payload
    },
    setForecast: (state,action) => {
        state.forecast = action.payload
    },
    setLoading: (state,action) => {
        state.loading = action.payload
    },
    
  },
});

export const { setTemperatureUnit,setCity,setCurrentWeather,setForecast,setLoading } = weatherSlice.actions;

export default weatherSlice.reducer;
