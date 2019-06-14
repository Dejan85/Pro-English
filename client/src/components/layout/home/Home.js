import React from "react";

// components
import Box from "./Box";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__mask" />
        <h1 className="home__h1">
          Dobrodosli u nas kutak u kome smo oziveli najbolje u nastavi
          engleskog.
        </h1>
        <p className="home__p">
          Na kreativan i zabavan nacin vam pomazemo da uspesno usvojite engleski
          i da govorite bez blokade i treme.
        </p>
      </div>
      <div className="home__boxes">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};

export default Home;
