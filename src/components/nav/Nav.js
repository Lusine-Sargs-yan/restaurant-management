import { Link } from "react-router-dom";
import { Routes } from "../../helpers/routes";
import "./Nav.css";
import {  useState, useEffect } from "react";

import SignIn from "../../register/register";
import Cart from "../shopping-cart/ShoppingCart";

export default function Nav({ changeReserveState }) {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 1000) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <nav className={`main-nav ${show && "scrolling-nav"}`}>
      {Routes.map(({ route, title }) => (
        <Link key={title} className="link" to={route}>
          {title}
        </Link>
      ))}
      <SignIn changeReserveState={changeReserveState} />
      <Cart />
    </nav>
  );
}
