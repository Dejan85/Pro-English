import React from "react";
import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars";

// component
import Item from "./Item";

const Mounthly = ({
  currentDate,
  getAllDaysInMonth,
  events,
  week2,
  months
}) => {
  const allDays = getAllDaysInMonth(currentDate);

  return (
    <div className="events__mounthly">
      <div className="events__mounthly--day">
        <ul className="events__mounthly--list">
          {week2 &&
            week2.map((item, index) => {
              return (
                <li key={index} className="events__mounthly--item">
                  {item}
                </li>
              );
            })}
        </ul>
        <ul className="events__mounthly--list2">
          {allDays.map((item, index) => {
            return (
              <li key={index} className="events__mounthly--item2">
                <Scrollbars
                // autoHide
                // autoHideTimeout={1000}
                // autoHideDuration={500}
                >
                  <h6 className="events__mounthly--h6">{item}</h6>
                  {item !== " "
                    ? events &&
                      events.map((item2, index2) => {
                        return (
                          item === parseInt(item2.date.split(" ")) &&
                          months[currentDate.month] ===
                            item2.date.split(" ")[1] && (
                            <div key={index2}>
                              <Item data={item2} />
                            </div>
                          )
                        );
                      })
                    : null}
                </Scrollbars>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Mounthly.propTypes = {
  currentDate: PropTypes.object,
  getAllDaysInMonth: PropTypes.func,
  events: PropTypes.array,
  week2: PropTypes.array,
  months: PropTypes.array
};

export default Mounthly;
