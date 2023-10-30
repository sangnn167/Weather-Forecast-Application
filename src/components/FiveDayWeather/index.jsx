import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const FiveDayWeather = () => {
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = "5d724a92f04ed3bea360323546c88261";
  const city = "Hanoi";
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        const currentDate = new Date();
        const futureDates = data.list.filter((item) => {
          // Lọc các mốc thời gian trong tương lai, bỏ qua ngày hiện tại
          const itemDate = new Date(item.dt_txt);
          return itemDate > currentDate;
        });
        setForecast(futureDates);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching 5-day forecast:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2>5-Day Forecast</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {forecast.map((item, index) => {
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
                          {item.main.temp_max}°C
                          <p>{item.main.temp_min}°C</p>
                        </div>
                        <div className={styles.description}>
                          <p>{item.weather[0].description}</p>
                          <p>{item.pop} %</p>
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
