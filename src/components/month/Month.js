import React from "react";

import styles from "./month.module.css";

function Month(props) {
  return (
    <div className={styles.box}>
      {props.monthName}
      {props.children}
    </div>
  );
}

export { Month };
