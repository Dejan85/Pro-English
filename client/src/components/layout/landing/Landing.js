import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import Nav from "./Nav";
import Logo from "./Logo";
// import Box from "./Box";

const Landing = () => {
  const [box, setBox] = useState({});
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
        {/* <span className="landing__span">
          Kroz individualizovane programe ucienja usmerene na vase konkretne
          izazove u ucenju pomazemo vas da ostvarite uspeh i oslobodite se
          straga i dilema.
        </span> */}
        {/* <Link to="/" className="landing__btn">
          O nama
        </Link> */}
        <div className="landing__box">
          <div className="landing__box-child">
            <div className="landing__icon-container landing__icon-container--bg1 ">
              <div className="landing__icon--border">
                <i className="fas fa-users" />
              </div>
            </div>
            <h3 className="landing__h3">Rad u malim grupama</h3>
            <p className="landing__box-p">
              Whether you stay with us for one week or one year, we will make
              sure you have the time of your life.
            </p>
          </div>

          <div className="landing__box-child">
            <div className="landing__icon-container landing__icon-container--bg2">
              <div className="landing__icon--border">
                <i className="far fa-comments" />
              </div>
            </div>
            <h3 className="landing__h3">Aktivna Konverzacija</h3>
            <p className="landing__box-p">
              Whether you stay with us for one week or one year, we will make
              sure you have the time of your life.
            </p>
          </div>

          <div className="landing__box-child">
            <div className="landing__icon-container landing__icon-container--bg3">
              <div className="landing__icon--border">
                <i className="fas fa-user-tie" />
              </div>
            </div>
            <h3 className="landing__h3">Induvidualni pristup</h3>
            <p className="landing__box-p">
              Whether you stay with us for one week or one year, we will make
              sure you have the time of your life.
            </p>
          </div>

          <div className="landing__box-child">
            <div className="landing__icon-container landing__icon-container--bg4">
              <div className="landing__icon--border">
                <i className="far fa-comment-dots" />
              </div>
            </div>
            <h3 className="landing__h3">Prosirenje vokabulara</h3>
            <p className="landing__box-p">
              Whether you stay with us for one week or one year, we will make
              sure you have the time of your life.
            </p>
          </div>

          <div className="landing__box-child">
            <div className="landing__icon-container landing__icon-container--bg5">
              <div className="landing__icon--border">
                <i className="fab fa-teamspeak" />
              </div>
            </div>
            <h3 className="landing__h3">Aktivna upotreba</h3>
            <p className="landing__box-p">
              Whether you stay with us for one week or one year, we will make
              sure you have the time of your life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
