import React from "react";
import Calendar from "./Calendar/index";
import Today from "./Today/index";
import styles from "./MainCalendar.module.scss";

const MainCalendar = () => {
  return (
    <div className={styles.container}>
      <Today />
      <Calendar />
    </div>
  );
};

export default MainCalendar;
