import React, { useEffect } from "react";

// components
import Box from "./partials/Box";
import HomeAbout from "./HomeAbout";
// import HomeCourse from "./HomeCourse";
import HomeCourseV2 from "./HomeCourseV2";
// import HomeExams from "./HomeExams";
// import Certificate from "./partials/Certificate";
import HomeBlog from "./HomeBlog";
import HomeEvents from "./HomeEvents";
import HomeTeachers from "./HomeTeachers";

// hooks
import useBox from "../../hooks/useBox";

const Home = () => {
  const { boxes } = useBox();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
      {/* <HomeCourse /> */}
      <HomeCourseV2 />
      {/* <HomeExams /> */}
      <HomeBlog />
      {/* <Certificate /> */}
      <HomeEvents />
      <HomeTeachers />
    </div>
  );
};

export default Home;
