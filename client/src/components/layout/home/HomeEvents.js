import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars";

// components
// import Calendar from "./calendar/Calendar";
import CalendarEventCard from "./calendar/CalendarEventCard";

//hooks
import useCalendar from "../../hooks/global/useCalendar";

const HomeEvent = ({ events }) => {
  const {
    addEventCalendarRender,
    currentDate,
    months,
    currentDay,
    week2,
    currentWeekDay
  } = useCalendar();

  // sortiramo evente po datumima
  events &&
    events.sort((a, b) => {
      return parseInt(a.date.split(" ")[0]) - parseInt(b.date.split(" ")[0]);
    });

  // sortiramo evente po satima
  events &&
    events.sort((a, b) => {
      return parseInt(a.time.split(" ")[0]) - parseInt(b.time.split(" ")[0]);
    });

  return (
    <div className="homeEvent">
      <div className="homeEvent__calendar">
        <h3 className="homeEvent__h3">Kalendar događaja</h3>
        {addEventCalendarRender("homeEvents")}
        {/* <div className="calendar__event">
          <CalendarEventCard />
        </div> */}
      </div>
      <div className="homeEvent__latest">
        <h3 className="homeEvent__h3">Mesečni događaji</h3>
        <div className="homeEvent__latest__card">
          <div
            style={{
              overflow: "hidden",
              overflowY: "auto",
              height: "40rem"
            }}
          >
            <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={500}>
              {events &&
                events.map((item, index) => {
                  const words = item.date.split(" ");
                  if (months[currentDate.month] === words[1]) {
                    return (
                      <div key={index} style={{ paddingRight: "1rem" }}>
                        <CalendarEventCard
                          title={item.title}
                          time={item.time}
                          date={words}
                        />
                      </div>
                    );
                  }
                })}
            </Scrollbars>
          </div>
          <Link className="homeEvent__link" to="/dogadjaji">
            Vidi detaljno
          </Link>
        </div>
      </div>
      <div className="homeEvent__upcoming">
        {/* <h3 className="homeEvent__h3">Dnevni događaji</h3> */}
        <h3 className="homeEvent__h3">Događaji za današnji dan</h3>
        <div className="homeEvent__upcoming__content">
          <ul
            className="homeEvent__upcoming__list"
            style={{ overflow: "hidden", overflowY: "auto", height: "40rem" }}
          >
            <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={500}>
              {events &&
                events.map((item, index) => {
                  const words = item.date.split(" ");
                  if (
                    months[currentDate.month] === words[1] &&
                    currentDay.day === parseInt(words)
                  ) {
                    return (
                      <li className="homeEvent__upcoming__item" key={index}>
                        <p className="homeEvent__upcoming__p">{item.title}</p>
                        <span className="homeEvent__upcoming__span">
                          {week2[currentWeekDay.weekDay - 1]}, {item.time}
                        </span>
                      </li>
                    );
                  }
                })}
            </Scrollbars>

            {/* <li className="homeEvent__upcoming__item">
              <p className="homeEvent__upcoming__p">Priprema za ispite</p>
              <span className="homeEvent__upcoming__span">
                Ponedeljak, 19:00 - 21:00
              </span>
            </li>
            <li className="homeEvent__upcoming__item">
              <p className="homeEvent__upcoming__p">Induvidualni casovi</p>
              <span className="homeEvent__upcoming__span">
                Ponedeljak, 19:00 - 21:00
              </span>
            </li>
            <li className="homeEvent__upcoming__item">
              <p className="homeEvent__upcoming__p">Casovi C1 nivoa</p>
              <span className="homeEvent__upcoming__span">
                Ponedeljak, 19:00 - 21:00
              </span>
            </li> */}
            <Link className="homeEvent__link-2" to="/dogadjaji">
              Vidi detaljno
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

HomeEvent.propTypes = {
  events: PropTypes.array
};

const mapStateToProps = state => {
  const { events } = state.events;
  return { events };
};

export default connect(
  mapStateToProps,
  null
)(HomeEvent);
