import React from "react";

import styles from "./calendar.module.css";

function Calendar(props) {
  console.log(2, props.days);
  return (
    <div className={styles.parent}>
      <div className={styles.box}>
        January
        <div style={{ backgroundColor: "red", textAlign: "left" }}>1</div>
        <div style={{ backgroundColor: "red" }}>2</div>
        <div style={{ backgroundColor: "red" }}>3</div>
        <div style={{ backgroundColor: "red" }}>4</div>
        <div style={{ backgroundColor: "red" }}>5</div>
        <div style={{ backgroundColor: "red" }}>6</div>
        <div style={{ backgroundColor: "red" }}>7</div>
      </div>
      <div className={styles.box}>February</div>
      <div className={styles.box}>March</div>
      <div className={styles.box}>April</div>
      <div className={styles.box}>May</div>
      <div className={styles.box}>June</div>
      <div className={styles.box}>July</div>
      <div className={styles.box}>August</div>
      <div className={styles.box}>September</div>
      <div className={styles.box}>October</div>
      <div className={styles.box}>November</div>
      <div className={styles.box}>December</div>
    </div>
  );
}

export { Calendar };
