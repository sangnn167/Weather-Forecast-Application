import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const TemperatureToday = () => {
  const [forecasts, setForecasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  const apiKey = "5d724a92f04ed3bea360323546c88261";
  const city = "Hanoi";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecasts(data.list);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching current day forecast:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        forecasts.length > 0 && (
          <div className={styles.card}>
            <ul>
              {forecasts.map((item) => (
                <li key={item.dt}>
                  {item.dt_txt}
                  <div className={styles.item}>
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      alt="Weather Icon"
                      width="50"
                      height="50"
                    />
                    {item.main.temp}°C
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
