import React from "react";
import Paybox from "./Paybox";
import payimg from "../Assests/payimg.svg";
import ico7 from "../Assests/ico7.svg";
import ico8 from "../Assests/ico8.svg";
import ico9 from "../Assests/ico9.svg";
import ico10 from "../Assests/ico10.svg";
import ico11 from "../Assests/ico11.svg";
import ico12 from "../Assests/ico12.svg";
import ico13 from "../Assests/ico13.svg";
export default function Pay() {
  return (
    <>
      <div className="main8">
        <div className="box-m">
          <div className="box1">
            <Paybox
              height={"100px"}
              width={"100%"}
              icoose={ico7}
              title="Pay"
              type="Utility"
              txt="Bills"
            />
          </div>
          <div className="box2">
            <Paybox
              height={"154px"}
              width={"100%"}
              icoose={ico8}
              title="Recharge"
              type="Prepaid"
              txt="Mobile"
            />
          </div>
        </div>
        <div className="box-m1">
          <div className="box3">
            <Paybox
              height={"165px"}
              width={"86%"}
              icoose={ico9}
              title="Pay"
              type="Taxes"
            />
          </div>
          <div className="box4">
            <Paybox
              height={"87px"}
              width={"86%"}
              icoose={ico10}
              title="Pay"
              type="Insurance"
            />
          </div>
        </div>
        <div className="box-m2">
          <div className="box5">
            <Paybox
              height={"100px"}
              width={"100%"}
              icoose={ico11}
              title="Pay"
              type="Internet"
              txt="Bills"
            />
          </div>

          <div className="box6">
            <Paybox
              height={"154px"}
              width={"100%"}
              icoose={ico12}
              title="Pay"
              type="Education"
              txt="free"
            />
          </div>
        </div>
        <div className="box-m3">
          <div className="box7">
            <img src={payimg} alt="" />
          </div>
          <div className="box8">
            <Paybox
              height={"126px"}
              width={"75%"}
              icoose={ico13}
              title="All Payment"
              type="Services"
            />
          </div>
        </div>
      </div>
    </>
  );
}
