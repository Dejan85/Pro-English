import React from "react";

// components
import Box from "./Box";
import HomeAbout from "./HomeAbout";
import HomeCourse from "./HomeCourse";

// hooks
import useBox from "../../hooks/useBox";

const Home = () => {
  const { boxes } = useBox();

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
        <Box info={boxes().box1} />
        <Box info={boxes().box2} />
        <Box info={boxes().box3} />
        <Box info={boxes().box4} />
        <Box info={boxes().box5} />
      </div>
      <HomeAbout />
      <HomeCourse />
    </div>
  );
};

export default Home;
