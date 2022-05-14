import React, { Children } from "react";

import styles from "./week.module.css";

function Week(props) {
  return (
    <div className={styles.week} style={{ backgroundColor: "gray" }}>
      {props.children}
    </div>
  );
}

export { Week };
