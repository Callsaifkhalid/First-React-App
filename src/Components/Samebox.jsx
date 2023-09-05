import React from "react";

export default function Samebox(props) {
  return (
    <div>
      <div className="div-m">
        <img src={props.icoos} alt="" />
        <p className="p-box">
          <span className="colo">{props.title}</span> <br />
          {props.type} <br /> <span>{props.type1}</span>
        </p>
        <p className="p-box1">
          Our machine learning models can <br />
          accurately oredict the age of a person <br />
          through an image to verify if it is <br />
          consistent with thre ID document.
        </p>
      </div>
    </div>
  );
}
