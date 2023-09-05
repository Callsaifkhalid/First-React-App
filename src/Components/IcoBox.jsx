import React from "react";

export default function IcoBox(props) {
  return (
    <div>
      <div className="div-a-1">
        <img className="widths-1" src={props.ico} alt="" />
        <p className="p-box-1">
          {props.title} <br />
          {props.type}
        </p>
        <p className="p-box1-1">
          We protect your funds and sensitive <br /> personal data with
          encryption in-flight and <br /> at-rest
        </p>
      </div>
    </div>
  );
}
