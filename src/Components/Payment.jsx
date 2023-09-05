import React from "react";
import Samebox from "./Samebox";
import ico4 from "../Assests/ico4.svg";
import ico5 from "../Assests/ico5.svg";
import ico6 from "../Assests/ico6.svg";
export default function Payment() {
  return (
    <>
      <div className="main5">
        <div className="child-a">
          <div className="div-x margleft">
            <Samebox icoos={ico4} title="2-Minute" type="Registration" />
          </div>
          <div className="div-y margleft">
            <Samebox icoos={ico5} title="Simple" type="Payments" />
          </div>
          <div className="div-z margleft">
            <Samebox icoos={ico6} title="100%" type="Transparency" />
          </div>
          <div className="div-t margleft">
            <p className="p-size">
              <span className="txt-span">Replacing</span>
              <br />
              Complexity <br />
              <span className="txt-span">with</span>
              <span className="colo">Simplicity</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
