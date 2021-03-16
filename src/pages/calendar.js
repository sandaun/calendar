import React from "react";

import styles from "./calendar.module.css";

function Calendar(props) {
  console.log(2, props.days);
  return <div className={styles.test}>Testing</div>;
}

export { Calendar };
