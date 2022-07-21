import React, { Component } from "react";
import {
  setDate,
  startOfMonth,
  lastDayOfMonth,
  eachDayOfInterval,
  format,
  getMonth,
  getYear,
  isMonday,
  isFriday,
  add,
  isSunday,
  
} from "date-fns";
import styles from "./Calendar.module.scss";
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
    };
    this.weekDaysArray = {
      firstWeek: [],
      secondWeek: [],
      thirdWeek: [],
      fourthWeek: [],
      fivethWeek: [],
      sixthWeek: [],
    };
  }

  getMonthDayArray(date, array) {
    const {
      firstWeek,
      secondWeek,
      thirdWeek,
      fourthWeek,
      fivethWeek,
      sixthWeek,
    } = this.weekDaysArray;
    const monthArray = eachDayOfInterval({
      start: new Date(
        getYear(date),
        getMonth(date),
        format(startOfMonth(date), "dd")
      ),
      end: new Date(
        getYear(date),
        getMonth(date),
        format(lastDayOfMonth(date), "dd")
      ),
    }).map((day) => {
      array.push(format(day, "dd"));
    });
    console.log(isFriday(startOfMonth(date)));
    if (isFriday(startOfMonth(date)) === true) {
      for (let i = 0; i < 2; i++) {
        const element = array[i];
        firstWeek.push(element);
      }
      for (let i = 0; i < 5; i++) {
        const element = array[i];
        firstWeek.unshift(<span className={styles.notVisible}>10</span>);
      }
      for (let i = 2; i < 9; i++) {
        const element = array[i];
        secondWeek.push(element);
      }
      for (let i = 9; i < 16; i++) {
        const element = array[i];
        thirdWeek.push(element);
      }
      for (let i = 16; i < 23; i++) {
        const element = array[i];
        fourthWeek.push(element);
      }
      for (let i = 23; i < 28; i++) {
        const element = array[i];
        fivethWeek.push(element);
      }
      if(format(lastDayOfMonth(date), "dd") > '28'){
        if(format(lastDayOfMonth(date), "dd") === '29'){
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
        }
        if(format(lastDayOfMonth(date), "dd") === '30'){
          for (let i = 28; i < 30; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
        }
        if(format(lastDayOfMonth(date), "dd") === '31'){
          for (let i = 28; i < 31; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
        }
      }
      if (format(lastDayOfMonth(date), "dd") != 31) {
        for (let i = 0; i < 31 - format(lastDayOfMonth(date), "dd"); i++) {
          fivethWeek.push(<span className={styles.notVisible}>10</span>);
        }
      }
    }
    if (isFriday(startOfMonth(date)) === true) {
      for (let i = 0; i < 2; i++) {
        const element = array[i];
        firstWeek.push(element);
      }
      for (let i = 0; i < 5; i++) {
        const element = array[i];
        firstWeek.unshift(<span className={styles.notVisible}>10</span>);
      }
      for (let i = 2; i < 9; i++) {
        const element = array[i];
        secondWeek.push(element);
      }
      for (let i = 9; i < 16; i++) {
        const element = array[i];
        thirdWeek.push(element);
      }
      for (let i = 16; i < 23; i++) {
        const element = array[i];
        fourthWeek.push(element);
      }
      for (let i = 23; i < 28; i++) {
        const element = array[i];
        fivethWeek.push(element);
      }
      if(format(lastDayOfMonth(date), "dd") > '28'){
        if(format(lastDayOfMonth(date), "dd") === '29'){
          for (let i = 28; i < 29; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
        }
        if(format(lastDayOfMonth(date), "dd") === '30'){
          for (let i = 28; i < 30; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
        }
        if(format(lastDayOfMonth(date), "dd") === '31'){
          for (let i = 28; i < 31; i++) {
            const element = array[i];
            fivethWeek.push(element);
          }
        }
      }
      if (format(lastDayOfMonth(date), "dd") != 31) {
        for (let i = 0; i < 31 - format(lastDayOfMonth(date), "dd"); i++) {
          fivethWeek.push(<span className={styles.notVisible}>10</span>);
        }
      }
    }
  
    console.log(firstWeek);
    console.log(secondWeek);
    console.log(thirdWeek);
    console.log(fourthWeek);
    console.log(fivethWeek);
    console.log(sixthWeek);
  }
  render() {
    const { today } = this.state;
    const array = [];
    const {
      firstWeek,
      secondWeek,
      thirdWeek,
      fourthWeek,
      fivethWeek,
      sixthWeek,
    } = this.weekDaysArray;
    return (
      <div className={styles.calendarConainer}>
        {this.getMonthDayArray(today, array)}
        <div className={styles.flexSection}>
          <p>{format(today, "MMMM")}</p>
          <p>{format(today, "Y")}</p>
        </div>
        <div className={styles.flexContainer}>
          {firstWeek.map((day) => (
            <p className={styles.numbersDate}>{day}</p>
          ))}
          {secondWeek.map((day) => (
            <p className={styles.numbersDate}>{day}</p>
          ))}
          {thirdWeek.map((day) => (
            <p className={styles.numbersDate}>{day}</p>
          ))}
          {fourthWeek.map((day) => (
            <p className={styles.numbersDate}>{day}</p>
          ))}
          {fivethWeek.map((day) => (
            <p className={styles.numbersDate}>{day}</p>
          ))}
          {sixthWeek.map((day) => (
            <p className={styles.numbersDate}>{day}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
