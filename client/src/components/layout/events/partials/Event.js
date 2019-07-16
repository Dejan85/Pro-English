import React from 'react';
import { Link } from 'react-router-dom';

// components

const Event = () => {
  return (
    <div className='event'>
      <div className='event__content'>
        <div className='event__date'>
          <div className='event__date--num'>28</div>
          <div className='event__date--mounth'>JULY</div>
        </div>
        <h2 className='event__h2'>
          Priprema za polaganje medjunarodnih ispita
          <span className='event__span'>
            <i className='far fa-clock' />
            October 8, 2018 10:00 - March 31, 2020 17:00
          </span>
        </h2>

        <p className='event__p'>
          Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex,
          quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor
          facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac
          leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh
          pulvinar, sodales nibh et, pretium urna. Sed rutrum, libero non
          pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus
          vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor
          pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat
          aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et,
          pretium urna.
        </p>
        <Link to='/dogadjaji/one' className='event__link'>
          Procitaj sve
        </Link>
      </div>
    </div>
  );
};

export default Event;
