import React, { useState, useRef } from "react";

import styles from "./month.module.css";
import { Week } from "../Week";

// const buildWeek = (monthDays) => {
//   const week = [];
//   const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   for (let i = 0; i < monthDays.length; i++) {
//     for (let j = 0; j < days.length; j++) {
//       if (monthDays[i].dayNumber === 1) {
//         if (monthDays[i].dayName === days[j]) {
//           week.push(<div className={styles.day}>{monthDays[i].dayNumber}</div>);
//           break;
//         } else {
//           week.push(<div className={styles.day}>B</div>);
//         }
//       } else if (monthDays[i].dayName === days[j]) {
//         week.push(<div className={styles.day}>{monthDays[i].dayNumber}</div>);
//       }
//     }
//     if (monthDays[i].dayName === "Sunday") {
//       // newStateValue = i;
//       break;
//     }
//   }
//   return week;
// };

function Month(props) {
  const { monthNames, monthDays } = props;
  let week = [];
  const weeks = [];
  let lastDayPosition = 0;

  const buildWeek = (position) => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    console.log(1, monthNames);
    for (let i = position; i < monthDays.length; i++) {
      for (let j = 0; j < days.length; j++) {
        if (monthDays[i].dayNumber === 1) {
          if (monthDays[i].dayName === days[j]) {
            week.push(
              <div className={styles.day}>{monthDays[i].dayNumber}</div>
            );
            break;
          } else {
            week.push(<div className={styles.day}>B</div>);
          }
        } else if (monthDays[i].dayName === days[j]) {
          week.push(<div className={styles.day}>{monthDays[i].dayNumber}</div>);
        }
      }
      if (monthDays[i].dayName === "Sunday" || i === monthDays.length - 1) {
        lastDayPosition = i + 1;
        break;
      }
    }
    console.log(1111, position);

    weeks.push(week);
    week = [];
    // console.log(444, weeks.length);
    if (weeks.length < 6) {
      buildWeek(lastDayPosition);
      console.log(999999999);
    }
  };

  buildWeek(lastDayPosition);

  return (
    <div className={styles.box}>
      {monthNames}
      <Week>{weeks[0]}</Week>
      <Week>{weeks[1]}</Week>
      <Week>{weeks[2]}</Week>
      <Week>{weeks[3]}</Week>
      <Week>{weeks[4]}</Week>
      <Week>{weeks[5]}</Week>
    </div>
  );
}

export { Month };
