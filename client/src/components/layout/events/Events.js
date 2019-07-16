import React, { useState } from 'react';

import Event from './partials/Event';

const Events = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  return (
    <div className='events'>
      {reset}
      <div className='events__search'>
        <p className='events__label'>Izaberi daatum</p>
        <div className='events__calendar'>07/25/2019</div>
        <button className='events__button'>Pretrazi Dogadjaje</button>
      </div>
      <div className='events__sort'>
        <ul className='events__list'>
          <li className='events__item'>Aktuelno</li>
          <li className='events__item'>Dnevni</li>
          <li className='events__item'>Nedeljni</li>
          <li className='events__item'>Mesecni</li>
        </ul>
      </div>
      <div className='events__heading'>
        <h2 className='events__h2'>Dogadjaji za 16. 07. 2019.</h2>
      </div>
      <Event />
      <Event />
      <Event />
    </div>
  );
};

export default Events;
