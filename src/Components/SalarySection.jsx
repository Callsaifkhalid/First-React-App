import React from "react";
import busthird from "../Assests/business-third-main.svg";
import BusinessBox from "./BusinessBox";
import small1 from "../Assests/business-third-small1.svg";
import small2 from "../Assests/business-third-small2.svg";
import small3 from "../Assests/business-third-small3.svg";
import small4 from "../Assests/business-third-small4.svg";
export default function SalarySection() {
  return (
    <>
      <div className="main-section">
        <div className="section-child1">
          <div className="sdiv1">
            <p className="sdiv1-p">
              Empower Your Payroll Process with Mark Systems
            </p>
          </div>
          <p className="sdiv1-p1">
            Secure Salary Payments <br /> and Visa
            <span className="p-span"> Card Solutions</span>
          </p>
          <p className="sdiv1-p2">
            Discover Mark Systems, your comprehensive salary payment platform
            designed to facilitate secure and seamless payroll solutions.
            Experience the convenience of secure payments to employees' Staff
            Salary Accounts through Visa Cards. Elevate your payroll process
            with Mark Systems.
          </p>
          <div className="small-section">
            <div className="vertical-text">Employee Banking</div>
            <div className="fourbox">
              <div className="boxchange">
                <div className="box-one">
                  <BusinessBox title="EOSB Finance" centerico={small1} />
                </div>
                <div className="box-two">
                  {" "}
                  <BusinessBox
                    title="Earned Salary
"
                    centerico={small2}
                  />
                </div>
              </div>
              <div className="boxchange">
                <div className="box-one">
                  {" "}
                  <BusinessBox title="Salary Advance" centerico={small3} />
                </div>
                <div className="box-two">
                  {" "}
                  <BusinessBox title="Staff Salary" centerico={small4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-child2">
          <img src={busthird} alt="" />
        </div>
      </div>
    </>
  );
}
