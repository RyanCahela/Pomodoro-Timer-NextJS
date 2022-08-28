import React from "react";

const TimeDisplay = ({ miliseconds }) => {
  const seconds = Math.floor(miliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return (
    <div className="time-display">
      <span>{hours}:</span>
      <span>{minutes}:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default TimeDisplay;
