import React from "react";

export default function Mobileimg({ stepsNumb, fv, ...props }) {
  return (
    <div>
      <div className="mobile">
        <div className="count">
          <p className="p-1">{stepsNumb}</p>
        </div>
        <div className="h-txt">
          <p className="mob-para">
            <span className="colo">{props.title}</span>
            <br />
            {props.type}
          </p>
        </div>
        <div className="mob-img">
          <img src={props.mobil} alt="" />
        </div>
      </div>
    </div>
  );
}
