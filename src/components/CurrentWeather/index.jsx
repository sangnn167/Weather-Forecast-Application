import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const city = useSelector((state) => state.weather.city);
  const currentWeather = useSelector((state) => state.weather.currentWeather);
  const temperatureUnit = useSelector((state) => state.weather.temperatureUnit);
  const loading = useSelector((state) => state.weather.loading);

  return (
    <div className={styles.containerr}>
      <div className={styles.currentWeather}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          currentWeather && (
            <div className={styles.current}>
              <h4>Current weather {city}</h4>
              <div className={styles.img}>
                {currentWeather.weather?.[0]?.icon && (
                  <img
                    src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                    alt="Weather Icon"
                    width="140"
                    height="140"
                  />
                )}
                <p>
                  {Number(currentWeather.main?.temp).toFixed(0)}
                  {temperatureUnit === "metric" ? "°C" : "°F"}
                </p>
                <div className={styles.description}>
                  <p>{currentWeather.weather?.[0]?.description}</p>
                  <p>Feels like {currentWeather.main?.feels_like}</p>
                </div>
              </div>
              <div className={styles.currentBottom}>
                <div>
                  <p>Pressure</p>
                  <p>{currentWeather.main?.pressure} mb</p>
                </div>
                <div>
                  <p>Humidity</p>
                  <p>{currentWeather.main?.humidity}%</p>
                </div>
                <div>
                  <p>Wind speed</p>
                  <p>{currentWeather.wind?.speed} m/s</p>
                </div>
                <div>
                  <p>Visibility</p>
                  <p>{currentWeather?.visibility} m</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
