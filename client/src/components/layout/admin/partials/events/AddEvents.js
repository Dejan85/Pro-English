import React, { useState, useEffect } from 'react';

// components
import Event from './Event';
// hooks
import useCalendarTest from '../../../../hooks/useCalendarTest';

const AddEvents = () => {
  const { getAllDaysInMonth } = useCalendarTest();
  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  });
  const [event, setEvent] = useState();
  const allDays = getAllDaysInMonth(currentDate);

  const eventHandler = item => {
    setCurrentDate(() => {
      return {
        ...currentDate,
        day: item
      };
    });

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
          {event &&
            <Event eventData={currentDate} eventHandler={eventHandler} />}

          {allDays.map((item, index) => {
            return (
              <li key={index} className='addEvents--item2'>
                <h6 className='addEvents--h6'>
                  {item}
                </h6>
                {item !== ' '
                  ? <i
                    className='fas fa-plus addEvents__icon'
                    onClick={eventHandler.bind(this, item)}
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
