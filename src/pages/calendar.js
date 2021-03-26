import React from "react";

import { Day } from "../components/Day";
import { Week } from "../components/Week";
import { Month } from "../components/month/Month";

import styles from "./calendar.module.css";

function Calendar(props) {
  console.log(2, props.days);
  // props.days.forEach((element, index) => {
  //   console.log(1111, Object.keys(element));
  // });

  return (
    <div className={styles.parent}>
      {/* <div className={styles.box}> */}
      {props.days.map((element, index) => {
        return (
          <Month>
            {Object.keys(element)}
            <Week>
              <Day />
              <div className={styles.day} style={{ backgroundColor: "red" }}>
                1
              </div>
              <div className={styles.day} style={{ backgroundColor: "red" }}>
                2
              </div>
              <div className={styles.day} style={{ backgroundColor: "red" }}>
                3
              </div>
              <div className={styles.day} style={{ backgroundColor: "red" }}>
                4
              </div>
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
          </Month>
        );
      })}
      {/* </div> */}
      {/* <div className={styles.box}>February</div>
      <div className={styles.box}>March</div>
      <div className={styles.box}>April</div>
      <div className={styles.box}>May</div>
      <div className={styles.box}>June</div>
      <div className={styles.box}>July</div>
      <div className={styles.box}>August</div>
      <div className={styles.box}>September</div>
      <div className={styles.box}>October</div>
      <div className={styles.box}>November</div>
      <div className={styles.box}>December</div> */}
    </div>
  );
}

export { Calendar };
