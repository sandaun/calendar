import React, { useState } from "react";

import styles from "./month.module.css";
import { Week } from "../Week";

const BuildMonth = (monthDays) => {
  const [count, setCount] = useState(0);

  monthDays.forEach((day) => {
    // day.forEach((d) => console.log(222, d.dayNumber));
  });

  const weeks = [];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  for (let i = count; i < monthDays.length; i++) {
    for (let j = 0; j < days.length; j++) {
      if (monthDays[i].dayNumber === 1) {
        if (monthDays[i].dayName === days[j]) {
          weeks.push(
            <div className={styles.day}>{monthDays[i].dayNumber}</div>
          );
          console.log(1, days[j]);
          break;
        } else {
          weeks.push(<div className={styles.day}>B</div>);
          console.log(2, days[j]);
        }
      }
      // else if (monthDays[i].dayName === days[j]) {
      //   weeks.push(<div className={styles.day}>{monthDays[i].dayNumber}</div>);
      // }
    }
  }

  // for (let i = 0; i <= 5; i++) {
  //   weeks.push(
  //     <Week>
  //       <div className={styles.day}>2</div>
  //       <div className={styles.day}>3</div>
  //       <div className={styles.day}>4</div>
  //       <div className={styles.day} style={{ backgroundColor: "red" }}>
  //         5
  //       </div>
  //       <div className={styles.day} style={{ backgroundColor: "red" }}>
  //         6
  //       </div>
  //       <div className={styles.day} style={{ backgroundColor: "red" }}>
  //         7
  //       </div>∂
  //     </Week>
  //   );
  // }

  return weeks;
};

function Month(props) {
  const { monthNames, monthDays } = props;
  return (
    <div className={styles.box}>
      {monthNames}
      {/* {props.children} */}
      <Week>{BuildMonth(monthDays)}</Week>
    </div>
  );
}

export { Month };
