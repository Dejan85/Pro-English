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
  const { tabs, gre, ielts, gmat, bocconi } = useTabs();

  return (
    <div className="exams">
      {reset}
      <div className="exams__content">
        {exams &&
          exams.map((item, index) => {
            return (
              <div className="exams__list1" ref={gre} key={index}>
                <div
                  className="exams__list1--tab"
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
        {/* <div className="exams__list1" ref={gre}>
          <div className="exams__list1--tab" data-name="gre" onClick={tabs}>
            GRE
          </div>
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={500}>
            <div className="exams__body">
              {exams.gre &&
                exams.gre.map((item, index) => {
                  return (
                    <div key={index}>
                      <h1 className="exams__h1">{item.h1}</h1>
                      <p className="exams__p">{item.p}</p>
                      <ul className="exams__list">
                        {item.table &&
                          item.table.map((item, index) => {
                            return (
                              <li key={index} className="exams__item">
                                {item}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  );
                })}
            </div>
          </Scrollbars>
        </div> */}

        {/* <div className="exams__list2" ref={ielts}>
          <div className="exams__list2--tab" data-name="ielts" onClick={tabs}>
            IELTS
          </div>
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={500}>
            <div className="exams__body">
              {exams.ielts &&
                exams.ielts.map((item, index) => {
                  return (
                    <div key={index}>
                      <h1 className="exams__h1">{item.h1}</h1>
                      {item.p &&
                        item.p.map((item, index) => {
                          return (
                            <p key={index} className="exams__p">
                              {item}
                            </p>
                          );
                        })}
                      <ul className="exams__list">
                        {item.list &&
                          item.list.map((item, index) => {
                            return (
                              <li key={index} className="exams__item">
                                {item}
                              </li>
                            );
                          })}
                      </ul>
                      {item.arr &&
                        item.arr.map((item, index) => {
                          return (
                            <div key={index}>
                              <h2 className="exams__h2">{item.h2}</h2>

                              {item.p &&
                                item.p.map((item, index) => {
                                  return (
                                    <p key={index} className="exams__p">
                                      {item}
                                    </p>
                                  );
                                })}

                              {item.h3 && (
                                <h3 className="exams__h3">{item.h3}</h3>
                              )}
                              <ul className="exams__list">
                                {item.list &&
                                  item.list.map((item, index) => {
                                    return (
                                      <li key={index} className="exams__item">
                                        {item}
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
          </Scrollbars>
        </div>

        <div className="exams__list3" ref={gmat}>
          <div className="exams__list3--tab" data-name="gmat" onClick={tabs}>
            GMAT
          </div>
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={500}>
            <div className="exams__body">
              {exams.gmat &&
                exams.gmat.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.h1 && <h1 className="exams__h1">{item.h1}</h1>}
                      {item.p && <p className="exams__p">{item.p}</p>}

                      {item.h3 && <h2 className="exams__h2">{item.h3}</h2>}
                      <ul className="exams__list">
                        {item.list &&
                          item.list.map((item, index) => {
                            return (
                              <li key={index} className="exams__item">
                                {item}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  );
                })}
            </div>
          </Scrollbars>
        </div>

        <div className="exams__list4" ref={bocconi}>
          <div className="exams__list4--tab" data-name="bocconi" onClick={tabs}>
            {examsTest && examsTest.item.title}
          </div>
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={500}>
            <div className="exams__body">
              {examsTest && parse(examsTest.item.body)}
            </div>
          </Scrollbars>
        </div> */}
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
