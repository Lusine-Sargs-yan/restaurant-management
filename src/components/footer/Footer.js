import React from "react";
import { Link } from "react-router-dom";
import {  useState } from "react";
import "./Footer.css";
import logo from "../../assets/images/restaurant-logo.jpg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import CallIcon from "@material-ui/icons/Call";

export function Footer({ changeState }) {
  const [isAdmin, setIsAdmin] = useState(false);
  let password = "";

  function Admin() {
    const handlePassword = (event) => {
      password = event.target.value;
    };

    if (isAdmin) {
      return (
        <div className="admin">
          <div>
            <Link
              to="/#"
              className="admin-close-link"
              onClick={() => setIsAdmin(false)}
            >
              X
            </Link>
          </div>
          <div>
            <h6 className="text-admin">ADMIN ACCOUNT</h6>
          </div>
          <div>
            <input
              onChange={handlePassword}
              className="admin-input"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="log-container">
            <Link
              to="/#"
              className="link colored"
              onClick={() => {
                if (password === "1234") {
                  changeState();
                }
              }}
            >
              Log in
            </Link>
          </div>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="App-footer">
      <Admin />
      <div className="footerInfo-container">
        <ul className="footer-inner-container">
          <img className="restaurant-logo" src={logo} alt="logo" />

          <li className="location">
            <Link to="/" className="footer-container-link">
              <LocationOnIcon />
              <span> Location </span>
            </Link>

            <p>Armenia </p>
            <p> Yerevan, St. Abovyan </p>
          </li>
          <li className="hours">
            <Link to="/#" className="footer-container-link">
              <QueryBuilderIcon /> <span>Hours</span>
            </Link>
            <p>Open 8:30 a.m</p>
            <p>Close 1:00 p.m</p>
          </li>
          <li className="contact">
            <Link to="/#" className="footer-container-link">
              <CallIcon />
              <span> Contact</span>
            </Link>
            <p> 800-2345-6799 </p>
          </li>
          <li>
            <Link
              onClick={() => setIsAdmin(true)}
              to="/#"
              className="footer-container-link"
            >
              <span> Admin </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
