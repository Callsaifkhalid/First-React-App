import React from "react";
import buyimg from "../Assests/buyimg.svg";
// import ico14 from "../Assests/ico14.svg";
import phonebuy from "../Assests/phone-buy.svg";
// import bgimgs from "../Assests/bgimgs.svg";
import Phoneicons from "./Phoneicons";
export default function Phonebuy() {
  return (
    <div>
      <div className="main9">
        <div className="sm-main">
          <div className="p-txt">
            <p className="pls">Buy Now pay Later</p>
          </div>
          <div className="img01">
            <img src={buyimg} alt="" />
          </div>
        </div>

        <div className="sm-main1">
          <div className="p-txt1">
            <Phoneicons />
          </div>
          <div className="p-txt1">
            <Phoneicons />
          </div>
          <div className="p-txt1">
            <Phoneicons />
          </div>
        </div>

        <div className="sm-main2">
          <img className="sm-main02" src={phonebuy} alt="" />
        </div>
      </div>
    </div>
  );
}
