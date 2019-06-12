import React from "react";

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
        <h1 className="landing__h1">
          Dobrodosli u nas kutak u kome smo oziveli najbolje u nastavi
          engleskog.
        </h1>
        <h2 className="landing__h2">
          Na kreativan i zabavan nacin vam pomazemo da uspesno usvojite engleski
          i da govorite bez blokade i treme.
        </h2>
        <h3 className="landing__h3">
          Kroz individualizovane programe ucienja usmerene na vase konkretne
          izazove u ucenju pomazemo vas da ostvarite uspeh i oslobodite se
          straga i dilema.
        </h3>
        <button>O name</button>
      </div>
    </div>
  );
};

export default Landing;
