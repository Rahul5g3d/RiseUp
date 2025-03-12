import React from "react";
import "./DailyStudy";
import HoursStudied from "../HoursStudied";

const DailyStudy = () => {
  return (
    <div class="container">
      <h1 class="main">Daily Study</h1>
      <p class="pp">
        This is your daily study page. Stay focused and keep learning!
      </p>
      <HoursStudied
        Hours={11}
        day={2}
        Time={"13 March 2025"}
        class="HourStudied"
        What={""}
      />

      <HoursStudied Hours={12} day={1} Time={"12 March 2025"} />
    </div>
  );
};

export default DailyStudy;
