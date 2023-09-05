import React from "react";
import "../App.css";
// import { useNavigate } from "react-router-dom";
// import logo from "../Assests/Logo.svg";
// import main from "../Assests/main-img.svg";
import ico1 from "../Assests/ico1.svg";
import ico2 from "../Assests/ico2.svg";
import ico3 from "../Assests/ico3.svg";
import ico17 from "../Assests/ico17.svg";
import ico18 from "../Assests/ico18.svg";
import ico19 from "../Assests/ico19.svg";
import mobil from "../Assests/phone1.svg";
import mobil1 from "../Assests/phone2.svg";
import mobil2 from "../Assests/phone3.svg";
import mobil3 from "../Assests/phone4.svg";
import mobil4 from "../Assests/phone5.svg";
import markvideo from "../Assests/video1.mp4";

import Nav from "./Nav";
import Hader from "./Hader";
import Box from "./Box";
import Truemain from "./Truemain";
import Payment from "./Payment";
import Mobileimg from "./Mobileimg";
import Fraud from "./Fraud";
import Pay from "./Pay";
import Phonebuy from "./Phonebuy";
import World from "./World";
import Footer from "./Footer";
export default function Main() {
  // const navigate = useNavigate("");

  // const handleaboutus = () => {
  //   navigate("/aboutus");
  // };
  return (
    <>
      <Nav />
      <Hader />

      <div className="videotag">
        <video
          className="mark_video"
          autoPlay="true"
          loop
          muted
          src={markvideo}
        ></video>
      </div>

      <h2 className="h2-1">Why choose Us</h2>
      <div className="main3">
        <Box ico={ico1} title="Serious" type="Protection" />

        <Box ico={ico2} title="Biometric" type="Access" />

        <Box ico={ico3} title="AI Fraud" type="Detection" />
      </div>

      <Truemain />

      <Payment />

      <div className="centar">
        <h1 className="colo">30 Second</h1>
      </div>

      <div className="main6">
        <div className="mobile1">
          <Mobileimg
            title="Simple"
            type=" Payments"
            mobil={mobil}
            stepsNumb={1}
          />
        </div>
        <div className="mobile2">
          <Mobileimg
            title="Identity"
            type=" Verfication"
            mobil={mobil1}
            stepsNumb={2}
          />
        </div>
        <div className="mobile3">
          <Mobileimg
            title="ID Selfie"
            type=" Matching"
            mobil={mobil2}
            stepsNumb={3}
          />
        </div>
        <div className="mobile4">
          <Mobileimg
            title="Online"
            type=" Biometrics"
            mobil={mobil3}
            stepsNumb={4}
          />
        </div>
        <div className="mobile5">
          <Mobileimg
            title="Date"
            type=" Extraction"
            mobil={mobil4}
            stepsNumb={5}
          />
        </div>
      </div>

      <Fraud />

      <Pay />
      <Phonebuy />

      <div className="adv">
        <h1 className="colo h2-h">Advanced anti-fraud tools</h1>
        <p className="usi">
          Using machine learning and human review. we detect and mitigate fraud{" "}
          <br /> before it happens.
        </p>
      </div>

      <div className="main3">
        <Box ico={ico17} title="Behavior analysis" />

        <Box ico={ico18} title="Country matching" />

        <Box ico={ico19} title="Proxy detection" />
      </div>

      <World />
      <div className="contaer">
        <hr />
      </div>
      <Footer />
    </>
  );
}
