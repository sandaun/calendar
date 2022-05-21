import React from "react";

import { Day } from "../components/Day";
import { Week } from "../components/Week";
import { Month } from "../components/month/Month";

import styles from "./calendar.module.css";

const BuildCalendar = (props) => {
  const { year } = props;
  console.log(3, year);

  return year.map((months, index) => {

    console.log(index, months);
    const monthDaysArray = Object.values(months).flat();
    const monthNames = Object.keys(months);
    // console.log(1, monthDaysArray);

    return (
      <Month
        key={monthNames}
        monthNames={monthNames}
        monthDays={monthDaysArray}
      >
        {/* <Week>
          <Day />
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
        </Week> */}
      </Month>
    );
  });
};

function Calendar(props) {
  const { year } = props;
  console.log(2, year);

  return (
    <div className={styles.parent}>
      <BuildCalendar year={year} />
    </div>
  );
}

export { Calendar };
