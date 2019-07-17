import React, { useState } from 'react';

// component
import Item from './Item';

// hooks
import useCalendarTest from '../../../hooks/useCalendarTest';

const Mounthly = () => {
  const { getAllDaysInMonth } = useCalendarTest();
  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  });
  const allDays = getAllDaysInMonth(currentDate);

  return (
    <div className='events__mounthly'>
      <div className='events__mounthly--day'>
        <ul className='events__mounthly--list'>
          <li className='events__mounthly--item'>Ponedeljak</li>
          <li className='events__mounthly--item'>Utorak</li>
          <li className='events__mounthly--item'>Sreda</li>
          <li className='events__mounthly--item'>Cetvrtak</li>
          <li className='events__mounthly--item'>Petak</li>
          <li className='events__mounthly--item'>Subota</li>
          <li className='events__mounthly--item'>Nedelja</li>
        </ul>
        <ul className='events__mounthly--list2'>
          {allDays.map((item, index) => {
            return (
              <li key={index} className='events__mounthly--item2'>
                <h6 className='events__mounthly--h6'>
                  {item}
                </h6>

                {item !== ' ' ? <Item /> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Mounthly;
