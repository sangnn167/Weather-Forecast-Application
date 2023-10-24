import React, { useState } from "react";
import styles from "./styles.module.css";

export const Abc = ({ count, setCount }) => {
  const [isLoading, setLoading] = useState(false);
  const [array] = useState([
    { title: "a", value: 123 },
    { title: "a", value: 123 },
    { title: "a", value: 123 },
    { title: "a", value: 123 },
  ]);

  return (
    <div onClick={() => setLoading(!isLoading)} className={styles.container}>
      {count}

      {array.map((item, index) => {
        return (
          <div key={index}>
            {item.value} - {item.title}
          </div>
        );
      })}

      {/* {isLoading ? <div>Is Loading....</div> : <div>LIST DATA</div>} */}
      {isLoading && <div>Is Loading....</div>}
      {!count && <div>Count is 0</div>}
    </div>
  );
};
