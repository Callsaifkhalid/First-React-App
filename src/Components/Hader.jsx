import React from "react";
import main from "../Assests/main-img.svg";

export default function Hader() {
  return (
    <div>
      <div className="main2">
        <div className="para">
          <p className="p-div">
            <span className="p-span">Mark</span> - Your financial <br />
            Super App is here now!
          </p>
          <p className="para1">Bringing the World & Banking into your hands.</p>
          <button className="btn1">Send - Recieve - Store</button>
        </div>
        <div className="img-main">
          <img className="relat" src={main} alt="" />
        </div>
      </div>
    </div>
  );
}
