import React from "react";

export default function Childbox(props) {
  return (
    <>
      <div className="div-s">
        <img src={props.icoo} alt="" />
        <p className="p-box">
          {props.title} <br />
          {props.type}
        </p>
        <p className="p-box1">
          Our machine learning models can accurately oredict the age of a person
          through an image to verify if it is consistent with thre ID document.
        </p>
      </div>
    </>
  );
}
