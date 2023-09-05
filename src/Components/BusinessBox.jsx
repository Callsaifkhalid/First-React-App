import React from "react";

export default function BusinessBox(props) {
  return (
    <>
      <div className="sm-main">
        <div className="sm-box">
          <img src={props.centerico} alt="" />
        </div>

        <p className="sm-p">{props.title}</p>
      </div>
    </>
  );
}
