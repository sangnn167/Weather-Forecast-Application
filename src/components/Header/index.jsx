import React, { useRef } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setCityName, toggleTemperatureUnit } from "../../store/slices/search.slice";

export const Header = () => {
  const dispatch = useDispatch();
  const cityName = useSelector((state) => state.weather.cityName);
  const isCelsius = useSelector((state) => state.weather.temperatureUnit === "metric");
  const inputRef = useRef(null);

  const handleCityChange = () => {
    if (!cityName) {
      alert("Vui lòng nhập tên thành phố.");
      inputRef.current.focus();
      return;
    }
    dispatch(setCity(cityName));
    dispatch(setCityName(""));
  };

  return (
    <div className={styles.header}>
      <div className={styles.abc}>
        <input
          ref={inputRef}
          placeholder="Search for location..."
          type="text"
          name="text"
          className={styles.input}
          value={cityName}
          onChange={(e) => dispatch(setCityName(e.target.value))}
        />
        <button onClick={handleCityChange}>Tìm kiếm</button>
      </div>
      <div className={styles.headerRight}>
        <p onClick={() => dispatch(toggleTemperatureUnit())}>
          {isCelsius ? "°C" : "°F"}
        </p>
      </div>
    </div>
  );
};
