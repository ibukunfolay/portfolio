import React from "react";
import timesheet from "../Assets/timesheet.png";
import healthstack from "../Assets/healthstack.png";
import stakes from "../Assets/360stakes.png";

const Marque = () => {
  return (
    <div className="py-[5em] scroll-left">
      <div className="flex ">
        <img
          src={healthstack}
          alt="healthstack logo"
          className="h-[40px] w-auto mx-[4em] grayscale opacity-50"
        />
        <img
          src={stakes}
          alt="healthstack logo"
          className="h-[40px] w-auto mx-[4em] grayscale opacity-25"
        />
        <img
          src={timesheet}
          alt="timesheet logo"
          className="h-[40px] w-auto mx-[4em] opacity-25"
        />
        <h4 className="text-2xl text-center font-sans font-bold text-white text-opacity-25">
          Capital Equity
        </h4>
      </div>
    </div>
  );
};

export default Marque;
