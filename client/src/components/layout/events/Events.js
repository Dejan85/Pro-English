import React, { useState, useRef } from 'react';

// components
import Event from './partials/Event';
import Calendar from '../home/calendar/Calendar';
import Actuel from './partials/Actuel';
import Daily from './partials/Daily';
import Mounthly from './partials/Mounthly';
import Weekly from './partials/Weekly';

const Events = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  const [calendar, setCalendar] = useState(false);
  const [calendarEventCard] = useState(true);
  const [sort, setSort] = useState({
    actuel: true,
    daily: false,
    mounthly: false,
    weekly: false
  });
  const actuel = useRef();
  const daily = useRef();

  const calendarHandler = () => {
    setCalendar(!calendar);
  };

  const closeCalendar = () => {
    if (calendar === false) return;
    setCalendar(false);
  };

  const sortingHandler = e => {
    console.log(e.target.name);
  };

  window.onwheel = closeCalendar;

  console.log('render');
  return (
    <div className='events' onClick={closeCalendar}>
      {reset}
      <h3 className='events__h3'>Budite u toku nasih i vasih desavanja.</h3>

      <div className='events__search'>
        {calendar &&
          <div className='events__popupCalendar'>
            <Calendar
              closePopup={closeCalendar}
              calendarEventCard={calendarEventCard}
            />
          </div>}
        <p className='events__label'>Izaberi daatum</p>
        <div className='events__calendar' onClick={calendarHandler}>
          07/25/2019
        </div>
        <div className='events__button'>Pretrazi Dogadjaje</div>
      </div>
      <div className='events__sort'>
        <ul className='events__list'>
          <li className='events__item' name='actuel' onClick={sortingHandler}>
            Aktuelno
          </li>
          <li className='events__item' name='day' onClick={sortingHandler}>
            Dnevni
          </li>
          <li className='events__item' name='week' onClick={sortingHandler}>
            Nedeljni
          </li>
          <li className='events__item' name='month' onClick={sortingHandler}>
            Mesecni
          </li>
        </ul>
      </div>
      <div className='events__heading'>
        <h2 className='events__h2'>Desavanja koja su trenutno aktuelna</h2>
      </div>
      <Actuel />
    </div>
  );
};

export default Events;
