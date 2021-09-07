import React from "react";
import "./Covid.style.css";

const CovidComponent = ({ name, tested, date, state }) => {
  return (
    <div className="mainComponent">
      <div className="innerDiv">
        <p>Covid Report</p>
        <p>{date}</p>
        <h1 className="title">Active - {name}</h1>
        <p className="content">Deaths - {tested}</p>
        <p>{state}</p>
      </div>
    </div>
  );
};

export default CovidComponent;
