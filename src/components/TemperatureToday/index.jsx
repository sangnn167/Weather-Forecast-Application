import React from "react";
import styles from "./styles.module.css";

export const TemperatureToday = ({ temperatureUnit, forecast, loading }) => {
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        forecast?.length > 0 && (
          <div className={styles.card}>
            <ul>
              {forecast.map?.((item) => (
                <li key={item.dt}>
                  {item.dt_txt}
                  <div className={styles.item}>
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      alt="Weather Icon"
                      width="50"
                      height="50"
                    />
                    <p>
                      {item.main.temp}
                      {temperatureUnit === "metric" ? "°C" : "°F"}
                    </p>
                  </div>
                  {item.weather[0].description}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};
