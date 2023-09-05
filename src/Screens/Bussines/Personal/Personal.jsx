import React from "react";
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";
import Abouthead from "../../../Components/Abouthead";
import CurrentAccount from "../../../Components/CurrentAccount";

export default function Personal() {
  return (
    <div>
      <Nav />
      <Abouthead title="Personal" />
      <CurrentAccount />
      <Footer />
    </div>
  );
}
