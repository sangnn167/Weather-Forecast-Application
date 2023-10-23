import React from "react";
import styles from "./styles.module.css";

export const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      className={styles.container}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
