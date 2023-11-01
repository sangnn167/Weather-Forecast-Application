import React from "react";
import styles from "./styles.module.css";

export const FiveDayWeather = ({ temperatureUnit, city,forecast,loading}) => {
  

  return (
    <div className={styles.container}>
      <h2>5-Day Forecast</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {forecast?.map((item, index) => {
              const dateTimeParts = item.dt_txt.split(" ");
              const date = dateTimeParts[0];
              if (
                index === 0 ||
                date !== forecast[index - 1].dt_txt.split(" ")[0]
              ) {
                return (
                  <div className={styles.card} key={item.dt}>
                    <li key={item.dt}>
                      {date}
                      <div className={styles.item}>
                        <img
                          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                          alt="Weather Icon"
                          width="50"
                          height="50"
                        />
                        <div className={styles.tempmax}>
                          <p>
                            {item.main.temp_max}
                            {temperatureUnit === "metric" ? "°C" : "°F"}
                          </p>
                          <p>
                            {item.main.temp_min}
                            {temperatureUnit === "metric" ? "°C" : "°F"}
                          </p>
                        </div>
                        <div className={styles.description}>
                          {<p>{item.weather[0].description}</p>}
                          {<p>{item.pop} %</p>}
                        </div>
                      </div>
                    </li>
                  </div>
                );
              }
              return null;
            })}
          </ul>
        </div>
      )}
      <h2>Hourly Weather</h2>
    </div>
  );
};
