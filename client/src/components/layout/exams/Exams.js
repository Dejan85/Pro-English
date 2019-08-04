import React, { useState } from 'react';

const Exams = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  return (
    <div className='exams'>
      {reset}
      {/* <h3 className='blog__h3'>Pripreme za ispite</h3>
      <div className='blog__line' /> */}
      <div className='exams__content'>
        {/* <ul className="exams__list">
          <li className="exams__item">Utvrdite nivo znanja</li>
          <li className="exams__item">GRE</li>
          <li className="exams__item">BOCCONI</li>
          <li className="exams__item">GMAT</li>
          <li className="exams__item">GREE</li>
        </ul> */}
        <div className='exams__list1'>
          <div className='exams__list1--tab'>Nivo znanja</div>
          <div className='exams__list1--content' />
        </div>
        <div className='exams__list2'>
          <div className='exams__list2--tab'>GRE</div>
          <div className='exams__list2--content' />
        </div>
        <div className='exams__list3'>
          <div className='exams__list3--tab'>BOCCONI</div>
          <div className='exams__list3--content' />
        </div>
        <div className='exams__list4'>
          <div className='exams__list4--tab'>GMAT</div>
          <div className='exams__list4--content' />
        </div>
        <div className='exams__list5'>
          <div className='exams__list5--tab'>GREE</div>
          <div className='exams__list5--content' />
        </div>
      </div>
    </div>
  );
};

export default Exams;
