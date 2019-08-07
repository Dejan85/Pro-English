import React, { useState } from 'react';

// hooks
import useTabs from '../../hooks/exams/useTabs';

const Exams = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  const { tabs, gre, gree, gmat, bocconi } = useTabs();

  return (
    <div className='exams'>
      {reset}
      <div className='exams__content'>
        <div className='exams__list1' ref={gre}>
          <div className='exams__list1--tab' data-name='gre' onClick={tabs}>
            GRE
          </div>
        </div>

        <div className='exams__list2' ref={gree}>
          <div className='exams__list2--tab' data-name='gree' onClick={tabs}>
            GREE
          </div>
        </div>

        <div className='exams__list3' ref={gmat}>
          <div className='exams__list3--tab' data-name='gmat' onClick={tabs}>
            GMAT
          </div>
        </div>

        <div className='exams__list4' ref={bocconi}>
          <div className='exams__list4--tab' data-name='bocconi' onClick={tabs}>
            BOCCONI
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
