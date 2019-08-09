import React, { useState } from 'react';

// components
import Box from './partials/Box';
import HomeAbout from './HomeAbout';
import HomeCourseV2 from './HomeCourseV2';
import Promotions from './partials/Promotions';
import Promotions2 from './partials/Promotions2';

import HomeBlog from './HomeBlog';
import HomeEvents from './HomeEvents';
import HomeTeachers from './HomeTeachers';

// hooks
import useBox from '../../hooks/home/useBox';

// images
import background from '../../../images/9.1.jpg';

const Home = () => {
  const { boxes } = useBox();
  const [promotions, setPromotions] = useState(true);
  const [bckg] = useState(() => {
    return { backgroundImage: `url(${background})` };
  });

  // stavio sam ovo ovde da bi resetovao scroll PRE NEGO STO SE COMPONENT MOUNT. Ovo je umesto componentWillMount
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  const promotionsHandler = () => {
    setPromotions(false);
  };

  return (
    <div className='home'>
      {reset}
      {/* {promotions && <Promotions promotionsHandler={promotionsHandler} />} */}
      {promotions && <Promotions2 promotionsHandler={promotionsHandler} />}
      <div className='home__content' style={bckg}>
        <h1 className='home__h1'>
          Dobrodosli u nas kutak u kome smo oziveli najbolje u nastavi
          engleskog.
        </h1>
        <p className='home__p'>
          Na kreativan i zabavan nacin vam pomazemo da uspesno usvojite engleski
          i da govorite bez blokade i treme.
        </p>
      </div>
      <div className='home__boxes'>
        <Box info={boxes().box1} />
        <Box info={boxes().box2} />
        <Box info={boxes().box3} />
        <Box info={boxes().box4} />
        <Box info={boxes().box5} />
      </div>
      <HomeAbout />
      <HomeCourseV2 />
      <HomeBlog />
      <HomeEvents />
      <HomeTeachers />
    </div>
  );
};

export default Home;
