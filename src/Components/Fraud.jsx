import React from "react";
import bimg from "../Assests/b-main.svg";
export default function Fraud() {
  return (
    <div>
      <div className="main7">
        <div className="txt-1">
          <p className="par">
            Prevent Fraud <br />
            before it occurs
          </p>
          <p className="par2">
            Mark safeguards your donor experience against fraud to <br />
            prevent costly charebacks and dings to your Stripe <br /> acount
            reputation.
          </p>
        </div>
        <div className="bimg1">
          <img src={bimg} alt="" />
        </div>
      </div>
    </div>
  );
}
