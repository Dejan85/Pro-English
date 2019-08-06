import React, { useState } from 'react';

const Exams = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  return (
    <div className='exams'>
      {reset}
      <div className='exams__content'>
        <div className='exams__list1'>
          <div className='exams__list1--tab'>GRE</div>
        </div>

        <div className='exams__list2'>
          <div className='exams__list2--tab'>GREE</div>
        </div>

        <div className='exams__list3'>
          <div className='exams__list3--tab'>GMAT</div>
        </div>

        <div className='exams__list4'>
          <div className='exams__list4--tab'>BOCCONI</div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
