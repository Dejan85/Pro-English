import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item ">
          <NavLink
            className="header__link"
            activeClassName="active"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="header__item flex__class">
          <NavLink
            className="header__link"
            activeClassName="active"
            to="/onama"
          >
            O nama
          </NavLink>
        </li>
        <li className="header__item flex__class">
          <NavLink
            className="header__link"
            activeClassName="active"
            to="/kursevi"
          >
            Kursevi
          </NavLink>
        </li>
        <li className="header__item flex__class">
          <NavLink
            className="header__link"
            activeClassName="active"
            to="/ispiti"
          >
            Pripreme za ispite
          </NavLink>
          {/* <DropNav info={ispiti} /> */}
        </li>
        <li className="header__item">
          <NavLink
            className="header__link"
            activeClassName="active"
            to="/dogadjaji"
          >
            Dogadjaji
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink className="header__link" activeClassName="active" to="/blog">
            Blog
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            className="header__link"
            activeClassName="active"
            to="/kontakt"
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
