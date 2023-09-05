import React from "react";
import busfouth from "../Assests/business-fourth.svg";
import verticalimg from "../Assests/vertical-line.svg";
export default function BusinessAccount() {
  return (
    <div>
      <div className="bluecontainer">
        <div className="acount1">
          <img src={busfouth} alt="" />
          <div className="bgwhite">
            <p className="par-mark">Mark International</p>
          </div>
          <p className="par-mark1">Business Account</p>

          <ul className="bus-ul">
            <li className="business-li">
              Send, receive and exchange high-value payments in 190+ countries
            </li>
            <li className="business-li">Access & Trade in 65+ currencies</li>
            <li className="business-li">5x quicker than traditional banks</li>
            <li className="business-li">
              Get an EU IBAN, a UK sort code, and a US routing number in your
              company name
            </li>
          </ul>
        </div>

        <div className="midimg">
          <img src={verticalimg} alt="" />
        </div>
        <div className="acount2">
          <img src={busfouth} alt="" />
          <div className="bgwhite">
            <p className="par-mark">Mark International</p>
          </div>
          <p className="par-mark1">Business Account</p>

          <p className="business-li">
            Business Current Account is an account designed to meet your daily
            Business needs. With a host of free banking services; we ensure that
            all your banking and financial needs are well taken care of so that
            you can focus on taking your business to newer heights.
          </p>
        </div>
      </div>
    </div>
  );
}
