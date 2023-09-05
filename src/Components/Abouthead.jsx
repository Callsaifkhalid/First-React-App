import React from "react";

export default function Abouthead(props) {
  return (
    <div>
      <div className="about1">
        <div className="about-child">
          <h1 className="about-h2">{props.title}</h1>
        </div>
      </div>
    </div>
  );
}
