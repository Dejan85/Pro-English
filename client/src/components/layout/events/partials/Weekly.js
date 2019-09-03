import React from "react";
import PropTypes from "prop-types";

// component
import Item from "./Item";

const Weekly = ({ events, week, months, week2 }) => {
  return (
    <div className="events__weekly">
      <div className="events__weekly--day">
        <ul className="events__weekly--list">
          {week.weeks().map((item, index) => {
            return (
              <li key={index} className="events__weekly--item">
                {`${item}. ${week2[index]}`}
              </li>
            );
          })}
        </ul>
        <ul className="events__weekly--list2">
          {week &&
            week.weeks().map((item, index) => {
              return (
                <li key={index} className="events__weekly--item2">
                  {events &&
                    events.map((item2, index2) => {
                      return (
                        week &&
                        months[week.month] === item2.date.split(" ")[1] &&
                        item === parseInt(item2.date.split(" ")) && (
                          <div key={index2}>
                            <Item data={item2} />
                          </div>
                        )
                      );
                    })}
                </li>
              );
            })}

          {/* <li className="events__weekly--item2">
            <Item />
            <Item />
            <Item />
            <Item />

            <Item />
          </li> */}
          {/* <li className="events__weekly--item2">
            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
            <Item />
            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

Weekly.propTypes = {
  events: PropTypes.array,
  week: PropTypes.object,
  months: PropTypes.array,
  week2: PropTypes.array
};

export default Weekly;
