import React from "react";
import { Link } from "react-router-dom";

//components
import Nav from "./partials/Nav";
import Logo from "./partials/Logo";
import Box from "./Box";

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
        {/* <span className="landing__span">
          Kroz individualizovane programe ucienja usmerene na vase konkretne
          izazove u ucenju pomazemo vas da ostvarite uspeh i oslobodite se
          straga i dilema.
        </span> */}
        {/* <Link to="/" className="landing__btn">
          O nama
        </Link> */}
        <div className="landing__box">
          <Box
            i={<i className="fas fa-users" />}
            h3={"Rad u malim grupama"}
            p={
              "Predavanja vodimo u malim grupama. Zelimo da posvetimo maksimum paznje svakom u grupi."
            }
            customClass={"landing__icon-container--bg1"}
          />

          <Box
            i={<i className="far fa-comments" />}
            h3={"Aktivna Konverzacija"}
            p={
              " Whether you stay with us for one week or one year, we will make sure you have the time of your life."
            }
            customClass={"landing__icon-container--bg2"}
          />

          <Box
            i={<i className="fas fa-user-tie" />}
            h3={"Induvidualni pristup"}
            p={
              "Whether you stay with us for one week or one year, we will make sure you have the time of your life."
            }
            customClass={"landing__icon-container--bg3"}
          />

          <Box
            i={<i className="far fa-comment-dots" />}
            h3={"Prosirenje vokabulara"}
            p={
              " Whether you stay with us for one week or one year, we will make sure you have the time of your life."
            }
            customClass={"landing__icon-container--bg4"}
          />

          <Box
            i={<i className="fab fa-teamspeak" />}
            h3={"Aktivna upotreba"}
            p={
              "Whether you stay with us for one week or one year, we will make sure you have the time of your life."
            }
            customClass={"landing__icon-container--bg5"}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
