import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { FiveDayWeather } from "./components/FiveDayWeather";
import { TemperatureToday } from "./components/TemperatureToday";
import CurrentWeather from "./components/CurrentWeather";
import {GetCurrentWeather,GetFiveDayForecast,} from "./services/getCurrenWeather";
import { useDispatch, useSelector } from "react-redux";
import {setCurrentWeather,setForecast,setLoading,} from "./store/slices/search.slice";

const App = () => {
  const dispatch = useDispatch();
  const temperatureUnit = useSelector((state) => state.weather.temperatureUnit);
  const city = useSelector((state) => state.weather.city);
  const currentWeather = useSelector((state) => state.weather.currentWeather);

  const apiKey = "5d724a92f04ed3bea360323546c88261";

  useEffect(() => {
    async function getWeather() {
      const data = await GetCurrentWeather({
        city,
        apiKey,
        temperatureUnit,
      });

      if (data != null) {
        dispatch(setCurrentWeather(data));
        dispatch(setLoading(false));
      } else {
        dispatch(setCurrentWeather(null));
      }
    }
    getWeather();
  }, [temperatureUnit, city, dispatch]);

  useEffect(() => {
    async function get5DayForecast() {
      const data = await GetFiveDayForecast({
        city,
        apiKey,
        temperatureUnit,
      });

      if (data != null) {
        dispatch(setForecast(data.list));
        dispatch(setLoading(false));
      } else {
        dispatch(setForecast(null));
        dispatch(setLoading(false));
      }
    }
    get5DayForecast();
  }, [temperatureUnit, city, dispatch]);

  
  
  return (
    <div className="Container">
      <Header/>
      {!currentWeather ? (
        <h1 style={{ color: "yellow" }}>Mời bạn nhập đúng tên thành phố</h1>
      ) : (
        <CurrentWeather />
      )}
      {!!currentWeather && (
        <div className={"current"}>
          <FiveDayWeather />
        </div>
      )}
      {!!currentWeather && (
        <div className="FiveDayForecast">
          <TemperatureToday />
        </div>
      )}
    </div>
  );
};

export default App;
