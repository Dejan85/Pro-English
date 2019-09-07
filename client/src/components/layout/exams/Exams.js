import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import parse from "html-react-parser";

// hooks
import useTabs from "../../hooks/exams/useTabs";

const Exams = props => {
  const { exams } = props;
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  // tabs is onClick handler, and gre, ielts, gmat bocconi is ref
  // const { gre, ielts, gmat, bocconi, sat, toefl } = useTabs();
  const gre = useRef();
  const ielts = useRef();
  const gmat = useRef();
  const sat = useRef();
  const toefl = useRef();
  const bocconi = useRef();
  const refs = [toefl, sat, ielts, gre, bocconi, gmat];

  const { tabs } = useTabs(toefl, sat, ielts, gre, bocconi, gmat);
  const dataName = ["toefl", "sat", "ielts", "gre", "bocconi", "gmat"];

  // let refs = useRef([...Array(exams && exams.length)].map(() => createRef()));

  return (
    <div className="exams">
      {reset}
      <div className="exams__content">
        {exams &&
          exams.map((item, index) => {
            return (
              <div
                className={`exams__list${index}`}
                ref={refs[index]}
                key={index}
              >
                <div
                  className={`exams__list${index}--tab`}
                  data-name={dataName[index]}
                  onClick={tabs}
                >
                  {item.title}
                </div>
                <Scrollbars
                  autoHide
                  autoHideTimeout={1000}
                  autoHideDuration={500}
                >
                  <div className="exams__body">{parse(item.body)}</div>
                </Scrollbars>
              </div>
            );
          })}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { exams: state.exams.exams };
}

export default connect(
  mapStateToProps,
  null
)(Exams);
