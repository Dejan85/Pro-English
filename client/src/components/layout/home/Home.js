import React, { useState } from "react";

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

//images
// import background from "../../../sass/images/9.jpg";

const Home = () => {
  const { boxes } = useBox();

  // stavio sam ovo ovde da bi resetovao scroll PRE NEGO STO SE COMPONENT MOUNT. Ovo je umesto componentWillMount
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  return (
    <div className="home">
      {reset}
      <div
        className="home__content"
        // style={{ backgroundImage: `url(${background})` }}
      >
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
