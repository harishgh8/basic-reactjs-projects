import React, { useState } from "react";
import calendar from "./calendar.css";

const Calendar = () => {
  const day = new Date();
  const [time, setTime] = useState(day);
  const UpdateTime = (day) => {
    day = new Date();
    setTime(day);
  };
  //   setInterval methods executes a given code at specified interval of time
  setInterval(UpdateTime, 1000);
  const dayOfMonth = day.getDate();
  const nameOfMonth = day.toLocaleString("default", { month: "short" });
  const currentYear = day.getFullYear();
  const currentHour = day.getHours();
  const currentMin = day.getMinutes();
  const currentSec = day.getSeconds();

  return (
    <div className="app">
      <div>
        <span className="day-of-month">{dayOfMonth}</span>
        <span className="month">{nameOfMonth}</span>
        <span className="year">{currentYear}</span>
      </div>
      <div className="break" />
      <div className="time">
        <span>
          {" "}
          {currentHour} : {currentMin}
        </span>
        <span className="sec"> {currentSec}</span>
        <span className="seconds"> sec</span>
      </div>
    </div>
  );
};

export default Calendar;
