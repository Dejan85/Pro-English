import React, { useState } from "react";
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
  const { tabs } = useTabs();
  const { gre, ielts, gmat, bocconi, sat, teofl } = useTabs();
  const refs = [gre, ielts, gmat, bocconi, sat, teofl];

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
                  data-name="gre"
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
