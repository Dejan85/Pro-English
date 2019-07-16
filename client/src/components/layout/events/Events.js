import React, { useState } from 'react';

// component
import Event from './partials/Event';
import Calendar from '../home/calendar/Calendar';

const Events = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  return (
    <div className='events'>
      {reset}
      <h3 className='events__h3'>Budite u toku nasih i vasih desavanja.</h3>

      <div className='events__search'>
        <div className='events__popupCalendar'>
          <Calendar />
        </div>
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
        <h2 className='events__h2'>Desavanja koja su trenutno aktuelna</h2>
      </div>
      <Event />
      <Event />
      <Event />
    </div>
  );
};

export default Events;
