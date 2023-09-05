import React from "react";

export default function Box(props) {
  return (
    <div>
      <div className="div-a">
        <img className="widths" src={props.ico} alt="" />
        <p className="p-box">
          {props.title} <br />
          {props.type}
        </p>
        <p className="p-box1">
          We protect your funds and sensitive <br /> personal data with
          encryption in-flight and <br /> at-rest
        </p>
      </div>
    </div>
  );
}
