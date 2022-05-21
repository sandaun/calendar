import React, { useState, useRef } from "react";

import styles from "./month.module.css";
import { Week } from "../Week";

function Month(props) {
  const { monthNames, monthDays } = props;
  let lastDayPosition = 0;
  let week = [];
  const totalWeeks = [];

  const buildWeeks = (position) => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    for (let i = position; i < monthDays.length; i++) {
      for (let j = 0; j < days.length; j++) {
        if (monthDays[i].dayNumber === 1) {
          if (monthDays[i].dayName === days[j]) {
            week.push(
              <div key={i + j} className={styles.day}>
                {monthDays[i].dayNumber}
              </div>
            );
            break;
          } else {
            week.push(
              <div key={i + j} className={styles.day}>
                B
              </div>
            );
          }
        } else if (monthDays[i].dayName === days[j]) {
          week.push(
            <div key={i + j} className={styles.day}>
              {monthDays[i].dayNumber}
            </div>
          );
        }
      }
      if (monthDays[i].dayName === "Sunday" || i === monthDays.length - 1) {
        lastDayPosition = i + 1;
        break;
      }
    }

    totalWeeks.push(week);

    week = [];

    if (totalWeeks.length < 6) {
      buildWeeks(lastDayPosition);
    }
  };

  buildWeeks(lastDayPosition);

  const BuildMonth = () => {
    return totalWeeks.map((week, index) => {
      return <Week key={monthNames + index}>{week}</Week>;
    });
  };

  return (
    <div className={styles.box}>
      {monthNames}
      <BuildMonth />
    </div>
  );
}

export { Month };
