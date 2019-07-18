import React, { useState, useEffect } from 'react';

// components
import Event from './Event';

// hooks
import useCalendarTest from '../../../../hooks/useCalendarTest';

const AddEvents = () => {
  const { getAllDaysInMonth } = useCalendarTest();
  const [currentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  });
  const [event, setEvent] = useState();
  const allDays = getAllDaysInMonth(currentDate);

  const eventHandler = () => {
    setEvent(!event);
  };

  return (
    <div className='addEvents'>
      <div className='addEvents--day'>
        <ul className='addEvents--list'>
          <li className='addEvents--item'>Ponedeljak</li>
          <li className='addEvents--item'>Utorak</li>
          <li className='addEvents--item'>Sreda</li>
          <li className='addEvents--item'>Cetvrtak</li>
          <li className='addEvents--item'>Petak</li>
          <li className='addEvents--item'>Subota</li>
          <li className='addEvents--item'>Nedelja</li>
        </ul>
        <ul className='addEvents--list2'>
          {event && <Event />}

          {allDays.map((item, index) => {
            return (
              <li key={index} className='addEvents--item2'>
                <h6 className='addEvents--h6'>
                  {item}
                </h6>
                {item !== ' '
                  ? <i
                    className='fas fa-plus addEvents__icon'
                    onClick={eventHandler}
                    />
                  : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AddEvents;
