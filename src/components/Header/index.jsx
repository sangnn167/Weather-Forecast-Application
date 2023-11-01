import React, { useRef, useState } from "react";
import styles from "./styles.module.css";

export const Header = ({ onTemperatureUnitChange, onCityChange }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [cityName, setCityName] = useState("");
  const inputRef = useRef(null);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
    onTemperatureUnitChange(isCelsius ? "imperial" : "metric");
  };
  const handleCityChange = () => {
    if (!cityName) {
      alert("Vui lòng nhập tên thành phố.");
      inputRef.current.focus();
      return;
    }

    onCityChange(cityName);
    setCityName("");
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
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleCityChange}>Tìm kiếm</button>
      </div>
      <div className={styles.headerRight}>
        <p onClick={toggleTemperatureUnit}>{isCelsius ? "°C" : "°F"}</p>
      </div>
    </div>
  );
};
