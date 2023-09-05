import React from "react";
import busfive from "../Assests/business-five.svg";
export default function SortCode() {
  return (
    <div>
      <div className="world">
        <div className="phoneimg">
          <img src={busfive} alt="" />
        </div>
        <div className="uk-us">
          <h1 className="sort-head">
            Get an EU IBAN, a UK
            <br /> sort code, and a US
            <br /> routing number in your <br />
            company name.
          </h1>
          <p className="sort-para">
            Get an EU IBAN, a UK sort code, and a US routing number
            <br />
            in your company name.
          </p>
        </div>
      </div>
    </div>
  );
}
