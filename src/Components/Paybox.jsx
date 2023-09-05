import React from "react";
// import ico7 from "../Assests/ico7.svg";
// import arrow from "../Assests/arrow.svg";
import { FiArrowUpRight } from "react-icons/fi";
export default function Paybox({ height, width, ...props }) {
  return (
    <div>
      <div className="s-box" style={{ height: height, width: width }}>
        <div className="s-box1">
          <img src={props.icoose} alt="" />
        </div>
        <div className="s-box2">
          <span className="span-b">
            {props.title} <br /> {props.type} <br /> {props.txt}
          </span>
        </div>
        <div className="s-box3">
          <FiArrowUpRight />
        </div>
      </div>
    </div>
  );
}
