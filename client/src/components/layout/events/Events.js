import React, { useState } from 'react';

// import Event from './partials/Event';

const Events = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  return (
    <div className='events'>
      {reset}
      <div className='events__search'>
        <div className='events__inputHolder'>
          <input />
          <button>Pretrazi dogadjaje</button>
        </div>
        <div className='events__sort'>
          <ul className='events__list'>
            <li className='events__item'>Mesecni</li>
            <li className='events__item'>Nedeljni</li>
            <li className='events__item'>Dnevni</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Events;
