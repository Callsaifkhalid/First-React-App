import React from "react";
import dot from "../Assests/dot-img.svg";
import trues from "../Assests/trueid.svg";
import Childbox from "./Childbox";
import eighteen from "../Assests/eighteen.svg";
import thik from "../Assests/tik-img.svg";
import thiksear from "../Assests/search-tik.svg";
import finger from "../Assests/fingprint.svg";
export default function Truemain() {
  return (
    <div>
      <div className="bgmain">
        <div className="main4">
          <div className="txt margleft">
            <p className="p1">
              We have Partnered <br /> with{" "}
              <span className="p-span">TrueID</span> to <br /> digitilize KYC
            </p>
            <p className="p2">
              We build readymode websites, mobile applications, <br /> and
              elaborate online business services.
            </p>
            <img src={dot} alt="" />

            <p>
              <img src={trues} alt="" />
            </p>
          </div>
          <div className="boxe margleft">
            <div className="box-a">
              <Childbox icoo={thik} title="Identity" type="Verification" />
            </div>

            <div className="box-b">
              <Childbox icoo={finger} title="Biometric" type="Autentication" />
            </div>
          </div>

          <div className="boxe1 margleft ">
            <div className="box-c">
              <Childbox icoo={thiksear} title="search" type="Protection" />
            </div>
            <div className="box-d">
              <Childbox icoo={eighteen} title="Age" type="Verification" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
