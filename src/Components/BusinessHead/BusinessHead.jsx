import React from "react";
import "./BusinessHead.css";
import BusinessMain from "../../Assests/business-main.svg";
export default function BusinessHead() {
  return (
    <>
      <div className="b-head">
        <div className="main2">
          <div className="para">
            <p className="p-div1">
              Mark - Your Business <br />
              <span className="p-span1">Super App</span> is here now!
            </p>
            <p className="para1-1">
              Bringing the World & Banking into your hands.
            </p>
            <button className="btn1-1">Send - Recieve - Store</button>
          </div>
          <div className="img-main">
            <img className="relat" src={BusinessMain} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
