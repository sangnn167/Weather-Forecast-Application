import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { FiveDayWeather } from "./components/FiveDayWeather";
import { TemperatureToday } from "./components/TemperatureToday";
import CurrentWeather from "./components/CurrentWeather";
import { GetCurrentWeather } from "./services/getCurrenWeather";

const App = () => {
  const [temperatureUnit, setTemperatureUnit] = useState("metric");
  const [city, setCity] = useState("Hà Nội");
  const [currentWeather, setCurrentWeather] = useState();
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState([]);

  const apiKey = "5d724a92f04ed3bea360323546c88261";

  useEffect(() => {
    async function getWeather() {
      const data = await GetCurrentWeather({
        city,
        apiKey,
        temperatureUnit,
      });
      console.log(data);
      if (data != null) {
        setCurrentWeather(data);
        setLoading(false);
      } else {
        setCurrentWeather(null);
      }
    }
    getWeather();
  }, [temperatureUnit, city]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${temperatureUnit}`
    )
      .then((response) => {
        if (response.status === 404) {
          return;
        } else {
          response.json().then((data) => {
            setForecast(data.list);
            setLoading(false);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching 5-day forecast:", error);
        setLoading(false);
      });
  }, [temperatureUnit, city]);

  const handleTemperatureUnitChange = (unit) => {
    setTemperatureUnit(unit);
  };
  const handleCityChange = (newCity) => {
    setCity(newCity);
  };
  return (
    <div className="Container">
      <Header
        onTemperatureUnitChange={handleTemperatureUnitChange}
        onCityChange={handleCityChange}
      />
      {currentWeather === null ? (
        <h1 style={{ color: "yellow" }}>Mời bạn nhập đúng tên thành phố</h1>
      ) : (
        <CurrentWeather
          temperatureUnit={temperatureUnit}
          city={city}
          currentWeather={currentWeather}
          loading={loading}
        />
      )}
      {currentWeather === null ? null : (
        <div className={"current"}>
          <FiveDayWeather
            temperatureUnit={temperatureUnit}
            city={city}
            forecast={forecast}
            loading={loading}
          />
        </div>
      )}
      {currentWeather === null ? null : (
        <div className="FiveDayForecast">
          <TemperatureToday
            temperatureUnit={temperatureUnit}
            city={city}
            forecast={forecast}
            loading={loading}
          />
        </div>
      )}
    </div>
  );
};

export default App;
