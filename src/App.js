import React from "react";
import "./App.css";



import { Header } from "./components/Header";
import { FiveDayWeather } from "./components/FiveDayWeather";
import { TemperatureToday } from "./components/TemperatureToday";
import CurrentWeather from "./components/CurrentWeather";


const App = () => {
  return (
    <div className="Container">
      <Header/>
      <h2>Weather in Hanoi</h2>
      <CurrentWeather />
      <div className={"current"}>
        <FiveDayWeather />
      </div>
      <div className="FiveDayForecast">
        <TemperatureToday/>
      </div>
      
    </div>
  );
};

export default App;
