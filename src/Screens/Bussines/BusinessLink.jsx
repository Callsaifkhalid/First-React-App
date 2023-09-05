import React from "react";
import "../../App.css";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import BusinessHead from "../../Components/BusinessHead/BusinessHead";
import bussecmain from "../../Assests/business-seconed-section-main-img.svg";
import TextHover from "../../Components/TextHover";
import SalarySection from "../../Components/SalarySection";
import BusinessAccount from "../../Components/BusinessAccount";
import SortCode from "../../Components/SortCode";
import GlobleBusiness from "../../Components/GlobleBusiness";
export default function BusinessLink() {
  return (
    <>
      <Nav />
      <BusinessHead />

      <div className="fullimg">
        <img src={bussecmain} alt="" />
      </div>

      <TextHover title="Mark developed AI-driven automation of 80% of all Corporate payments." />
      <TextHover title="MarkThe goal is to fully automate Business’ payment processes and related internal controls using Advanced Data Analytics." />
      <TextHover title="All-in-one Embedded Finance, by directly integrating payments Mark fills the control gap in Banking and Accounting systems. We build to cover all payment rails from cards to banks on a single platform. Cash Management, Accounting, Tax, Reporting and Compliance….everything!" />
      <TextHover title="Promoting Cash-less culture for Corporate Spending with Visibility and Control no matter where you are." />

      <SalarySection />

      <div className="txtpara">
        <h1 className="center-heading">Mark Business Account</h1>
        <p className="par-center">
          Your cross-border payments platform for international business, we
          support Businesses of all <br />
          structures and sizes, wherever in the world they do business.
        </p>
      </div>
      <BusinessAccount />
      <SortCode />
      <GlobleBusiness />
      <div className="contaer">
        <hr />
      </div>
      <Footer />
    </>
  );
}
