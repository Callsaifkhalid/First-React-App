import React from "react";
// import Box from "./Box";
import aboutico1 from "../Assests/about-ico1.svg";
import aboutico2 from "../Assests/about-ico2.svg";
import IcoBox from "./IcoBox";
export default function Aboutsecond() {
  return (
    <div>
      <div className="sec">
        <div className="seen">
          <IcoBox title="Mission" type="" ico={aboutico1} />
        </div>
        <div className="seen1">
          <IcoBox title="Vision" type="" ico={aboutico2} />
        </div>
      </div>
    </div>
  );
}
