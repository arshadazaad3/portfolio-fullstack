import React from "react";

import { images } from "../../constants";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-log">
          <img alt="logo" src={images.logo} />
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div>
                <a href={`#${item}`}>{item}</a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
