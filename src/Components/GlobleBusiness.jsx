import React from "react";
import bussix from "../Assests/business-six2.svg";
export default function GlobleBusiness() {
  return (
    <div>
      <div className="global">
        <div className="global-container">
          <div className="global1">
            <h1 className="global-head">
              Global Transactions for <br /> Global Businesses
            </h1>
            <p className="global-para">
              Effortlessly facilitate the seamless transfer, reception, and
              exchange of high-value payments, spanning across an extensive
              network of over 190 countries. Streamline your global financial
              transactions with our user-friendly platform, ensuring secure and
              efficient cross-border monetary interactions at your fingertips.
            </p>
          </div>
          <div className="global2">
            <img src={bussix} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
