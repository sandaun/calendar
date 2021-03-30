import React from "react";

import styles from "./month.module.css";
import { Week } from "../Week";

const BuildMonth = (monthDays) => {
  monthDays.forEach((day) => {
    // day.forEach((d) => console.log(222, d.dayNumber));
  });

  const weeks = [];

  for (let i = 0; i <= 5; i++) {
    weeks.push(
      <Week>
        <div className={styles.day}>2</div>
        <div className={styles.day}>3</div>
        <div className={styles.day}>4</div>
        <div className={styles.day} style={{ backgroundColor: "red" }}>
          5
        </div>
        <div className={styles.day} style={{ backgroundColor: "red" }}>
          6
        </div>
        <div className={styles.day} style={{ backgroundColor: "red" }}>
          7
        </div>
      </Week>
    );
  }

  return weeks;
};

function Month(props) {
  const { monthNames, monthDays } = props;
  return (
    <div className={styles.box}>
      {monthNames}
      {/* {props.children} */}
      {BuildMonth(monthDays)}
    </div>
  );
}

export { Month };
