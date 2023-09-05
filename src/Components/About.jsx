import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Abouthead from "./Abouthead";
import Aboutsecond from "./Aboutsecond";
import Ceo from "./Ceo";
import aboutteam1 from "../Assests/about-team1.svg";
import aboutteam2 from "../Assests/about-team2.svg";
import aboutteam3 from "../Assests/about-team3.svg";
import aboutteam4 from "../Assests/about-team4.svg";
export default function About() {
  return (
    <div>
      <Nav />
      <Abouthead title="About Us" />
      <Aboutsecond />

      <div className="team">
        <h1 className="team-heading">Team</h1>
      </div>

      <Ceo
        aboutimg={aboutteam1}
        title="Adil Khan – Founder & CEO – Mark"
        title1="Systems"
      />
      <Ceo
        aboutimg={aboutteam2}
        title="Usman Qureshi - CTO & Director"
        isReverse
      />
      <Ceo aboutimg={aboutteam3} title="Michael Zimmel - Director" />
      <Ceo aboutimg={aboutteam4} title="Marshall Ring - Director" isReverse />

      <div className="contaer">
        <hr />
      </div>

      <Footer />
    </div>
  );
}
