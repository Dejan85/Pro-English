import React from "react";
import { Link } from "react-router-dom";

//components
import Nav from "./Nav";
import Logo from "./Logo";

const Landing = () => {
  return (
    <div className="landing">
      <header className="landing__header">
        <div className="container-flex-row ">
          <Logo />
          <Nav />
        </div>
      </header>
      <div className="landing__content">
        <div className="landing__content--mask" />
        <h1 className="landing__h1">
          Dobrodosli u nas kutak u kome smo oziveli najbolje u nastavi
          engleskog.
        </h1>
        <p className="landing__p">
          Na kreativan i zabavan nacin vam pomazemo da uspesno usvojite engleski
          i da govorite bez blokade i treme.
        </p>
        <span className="landing__span">
          Kroz individualizovane programe ucienja usmerene na vase konkretne
          izazove u ucenju pomazemo vas da ostvarite uspeh i oslobodite se
          straga i dilema.
        </span>
        <Link to="/" className="landing__btn">
          O nama
        </Link>
      </div>
    </div>
  );
};

export default Landing;
