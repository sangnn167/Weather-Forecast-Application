import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const CurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState();
  const [loading, setLoading] = useState(true);

  const apiKey = "5d724a92f04ed3bea360323546c88261";
  const city = "Hanoi";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching current weather:", error);
        setLoading(false);
      });
   
  }, []);

  return (
    <div className={styles.containerr}>

      <div className={styles.currentWeather}>
        {loading ? (
          <p>Loading...</p>
        ): (
          currentWeather && (
            <div className={styles.current}>
              <h4>Current weather</h4>
              <div className={styles.img}>
                {currentWeather.weather[0].icon && (
                  <img
                    src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                    alt="Weather Icon"
                    width="140"
                    height="140"
                  />
                )}
                <p>{currentWeather.main.temp - 273.15}°C</p>
                <div className={styles.description}>
                  <p>{currentWeather.weather[0].description}</p>
                  <p>
                    Feels like{" "}
                    {(currentWeather.main.feels_like * 9/5 - 459.67).toFixed(2)}°F

                  </p>
                </div>
              </div>
              <div className={styles.currentBottom}>
                <div>
                  <p>Pressure</p>
                  <p>{currentWeather.main.pressure} mb</p>
                </div>
                <div>
                  <p>Humidity</p>
                  <p>{currentWeather.main.humidity}%</p>
                </div>
                <div>
                  <p>Wind speed</p>
                  <p>{currentWeather.wind.speed} m/s</p>
                </div>
                <div>
                  <p>Visibility</p>
                  <p>{currentWeather.visibility} m</p>
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
