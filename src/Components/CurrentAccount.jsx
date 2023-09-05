import React from "react";
import personalsecond from "../Assests/personal-main.svg";

import Samebox from "./Samebox";
import ico4 from "../Assests/ico4.svg";
import ico5 from "../Assests/ico5.svg";
import ico6 from "../Assests/ico6.svg";
export default function CurrentAccount() {
  return (
    <div>
      <div className="personal-account">
        <div className="personal1">
          <img src={personalsecond} alt="" />
        </div>
        <div className="personal2">
          <h1 className="per-first-head">All In One</h1>
          <h1 className="p-span-fir">Current Account</h1>
          <div className="personal-samebox">
            <div className="p-s-1">
              <Samebox icoos={ico6} type="Efficient" type1="Banking" />
            </div>
            <div className="p-s-2">
              <Samebox icoos={ico4} type="Versatile" type1="Registration" />
            </div>
            <div className="p-s-3">
              <Samebox icoos={ico5} type="2-Minute" type1="Registration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
