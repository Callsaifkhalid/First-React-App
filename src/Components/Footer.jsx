import React from "react";
import facebook from "../Assests/facebook.svg";
import twitter from "../Assests/twitter.svg";
import linkedin from "../Assests/linkedin.svg";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="mrk">
          <h2 className="h2-u">Mark</h2>
          <p className="p-u">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="coloico">
            <img className="face" src={facebook} alt="" />
            <img className="face" src={twitter} alt="" />
            <img className="face" src={linkedin} alt="" />
          </div>
        </div>
        <div className="wh-we-do">
          <h2 className="h2-u">WhatWeDo</h2>
          <p className="p-u">Web Design </p>
          <p className="p-u">App Design</p>
          <p className="p-u">Social Media Manage</p>
          <p className="p-u">Market Analysis Project</p>
        </div>
        <div className="company">
          <h2 className="h2-u">Company</h2>
          <p className="p-u">About Us</p>
          <p className="p-u">Career</p>
          <p className="p-u">Become Investor</p>
        </div>
        <div className="support">
          <h2 className="h2-u">Support</h2>
          <p className="p-u">FAQ</p>
          <p className="p-u">Policy</p>
          <p className="p-u">Business</p>
        </div>
        <div className="contact">
          <h2 className="h2-u">Contact</h2>
          <p className="p-u">WhatsApp</p>
          <p className="p-u">Support24</p>
        </div>
      </div>
    </div>
  );
}
