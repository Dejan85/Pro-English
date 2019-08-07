import React, { useState } from 'react';
import { connect } from 'react-redux';

// hooks
import useTabs from '../../hooks/exams/useTabs';

const Exams = props => {
  const { exams } = props;

  console.log(exams);

  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  const { tabs, gre, ielts, gmat, bocconi } = useTabs();

  return (
    <div className='exams'>
      {reset}
      <div className='exams__content'>
        <div className='exams__list1' ref={gre}>
          <div className='exams__list1--tab' data-name='gre' onClick={tabs}>
            GRE
          </div>
          <div className='exams__body'>
            {exams.gre &&
              exams.gre.map((item, index) => {
                return (
                  <div key={index}>
                    <h1 className='exams__h1'>
                      {item.h1}
                    </h1>
                    <p className='exams__p'>
                      {item.p}
                    </p>
                    <ul className='exams__list'>
                      {item.table &&
                        item.table.map((item, index) => {
                          return (
                            <li key={index} className='exams__item'>
                              {item}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>

        <div className='exams__list2' ref={ielts}>
          <div className='exams__list2--tab' data-name='ielts' onClick={tabs}>
            IELTS
          </div>
          <div className='exams__body'>xad</div>
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

function mapStateToProps (state) {
  return { exams: state.exams };
}

export default connect(mapStateToProps, null)(Exams);
