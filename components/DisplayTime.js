import React from "react";

const DisplayTime = ({ miliseconds }) => {
  const seconds = Math.floor(miliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return (
    <div>
      <span>{hours}:</span>
      <span>{minutes}:</span>
      <span>{seconds}:</span>
      <span>{miliseconds % 100}</span>
    </div>
  );
};

export default DisplayTime;
