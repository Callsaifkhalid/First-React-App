import React from "react";

export default function Ceo({ isReverse, ...props }) {
  return (
    <div>
      <div
        className="team-main"
        style={{ flexDirection: isReverse ? "row-reverse" : "" }}
      >
        <div className="team-one">
          <img src={props.aboutimg} alt="" />
        </div>
        <div className="team-two">
          <h1 className="team-head">
            {props.title}
            {/* Adil Khan – Founder & CEO – Mark */}
            <br /> {props.title1}
          </h1>

          <ul className="about-ul">
            <li className="about-li">MBA - University of Bolton, UK</li>
            <li className="about-li">MBA - University of Bolton, UK</li>
            <li className="about-li">MBA - University of Bolton, UK</li>
            <li className="about-li">
              15+ Years Global Experience from UK, Canada, UAE, KSA & South
              Korea
            </li>
            <li className="about-li">MBA - University of Bolton, UK</li>
            <li className="about-li">MBA - University of Bolton, UK</li>
            <li className="about-li">
              15+ Years Global Experience from UK, Canada, UAE, KSA & South
              Korea
            </li>
            <li className="about-li">MBA - University of Bolton, UK</li>
            <li className="about-li">MBA - University of Bolton, UK</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
