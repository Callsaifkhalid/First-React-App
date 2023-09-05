import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assests/Logo.svg";
export default function Nav() {
  return (
    <div>
      <div className="fixed-nav">
        <div className="main">
          <div className="one">
            <span className="link">
              <img className="logo-img" src={logo} alt="" />
            </span>
            <NavLink
              to="/"
              className="link"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#011039" : "",
                  color: isActive ? "white" : "",
                  textDecoration: "none",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/business"
              className="link"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#011039" : "",
                  color: isActive ? "white" : "",
                  textDecoration: "none",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "25px",
                };
              }}
            >
              Business
            </NavLink>
            <span className="link">Investments</span>
          </div>
          <div className="two">
            <NavLink
              to="/aboutus"
              className="link"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#011039" : "",
                  color: isActive ? "white" : "",
                  textDecoration: "none",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "25px",
                };
              }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/personal"
              className="link"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#011039" : "",
                  color: isActive ? "white" : "",
                  textDecoration: "none",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "25px",
                };
              }}
            >
              Personal
            </NavLink>
            <span className="link">Login</span>
            <span className="link">English</span>
          </div>
        </div>
      </div>
    </div>
  );
}
