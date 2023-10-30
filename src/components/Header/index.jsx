import React from "react";
import styles from "./styles.module.css";


export const Header = () => {
  return (
    <div className={styles.header}>
       <div className={styles.abc}>
       <input placeholder="Searth for localtion" type="text" name="text" className={styles.input}/>
          Hanoi
       </div>
        <div className={styles.headerRight}>
          <p>°C</p>
        </div>
       
    </div>
  );
};
