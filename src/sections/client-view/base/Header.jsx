import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);

  return (
    <header className={"header " + (menu ? "active" : "")}>
      <div className="auto__container">
        <div className="header__inner">
          <Link to={"/"} className="header__inner-logo">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
          </Link>
          <nav className={"nav " + (menu ? "active" : "")}>
            <div className="nav__inner">
              <div className="nav__inner-link reg">¡Hola, María José!</div>
              <Link to={"/"} className="nav__inner-link">
                Logout
              </Link>
            </div>
          </nav>
          <div
            className={"burger " + (menu ? "active" : "")}
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
