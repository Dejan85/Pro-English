import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// components
// import Calendar from "../home/calendar/Calendar";
import Actuel from "./partials/Actuel";
import Daily from "./partials/Daily";
import Mounthly from "./partials/Mounthly";
import Weekly from "./partials/Weekly";

// hooks
import useCalendar from "../../hooks/global/useCalendar";

const Events = ({ events }) => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  const [calendar, setCalendar] = useState(false);
  // const [calendarEventCard] = useState(true);
  const [sort, setSort] = useState({
    actuel: false,
    daily: true,
    mounthly: false,
    weekly: false
  });
  // const actuel = useRef();
  const daily = useRef();
  const weekly = useRef();
  const mounthly = useRef();
  const { addEventCalendarRender, currentDate, months } = useCalendar();
  const [date, setDate] = useState(false);

  const calendarHandler = () => {
    setCalendar(!calendar);
  };

  const closeCalendar = () => {
    if (calendar === false) return;
    setCalendar(false);
  };

  const sortingHandler = ref => {
    setSort({
      [ref.current.getAttribute("data-name")]: true
    });
  };

  window.onwheel = closeCalendar;

  return (
    <div className="events">
      {reset}
      <h3 className="events__h3">Budite u toku nasih i vasih desavanja.</h3>

      <div className="events__search">
        {calendar && (
          <div className="events__popupCalendar">
            {/* <Calendar
              closePopup={closeCalendar}
              calendarEventCard={calendarEventCard}
            /> */}
            {addEventCalendarRender(events, calendarHandler)}
          </div>
        )}
        <p className="events__label">Izaberi daatum</p>
        <div className="events__calendar" onClick={calendarHandler}>
          <p>
            {date ||
              `${currentDate.day}. ${months[currentDate.month]} ${
                currentDate.year
              }.`}
          </p>
        </div>
        {/* <div className="events__button">Pretrazi Dogadjaje</div> */}
      </div>
      <div className="events__sort">
        <ul className="events__list">
          {/* <li
            className={`events__item ${sort.actuel && "events__item__active2"}`}
            data-name="actuel"
            ref={actuel}
            onClick={sortingHandler.bind(this, actuel)}>
            Aktuelno
          </li> */}
          <li
            className={`events__item ${sort.daily && "events__item__active2"}`}
            data-name="daily"
            ref={daily}
            onClick={sortingHandler.bind(this, daily)}
          >
            Dnevni
          </li>
          <li
            className={`events__item ${sort.weekly && "events__item__active2"}`}
            data-name="weekly"
            ref={weekly}
            onClick={sortingHandler.bind(this, weekly)}
          >
            Nedeljni
          </li>
          <li
            className={`events__item ${sort.mounthly &&
              "events__item__active2"}`}
            data-name="mounthly"
            ref={mounthly}
            onClick={sortingHandler.bind(this, mounthly)}
          >
            Mesecni
          </li>
        </ul>
      </div>
      <div className="events__heading">
        <h2 className="events__h2">Desavanja koja su trenutno aktuelna</h2>
      </div>
      {(sort.actuel && <Actuel />) ||
        (sort.daily && (
          <Daily events={events} currentDate={currentDate} months={months} />
        )) ||
        (sort.weekly && <Weekly events={events} />) ||
        (sort.mounthly && <Mounthly />)}

      {/* {sort.mounthly && <Mounthly />} */}
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.array
};

const mapStateToProps = state => {
  const { events } = state.events;
  return { events };
};

export default connect(
  mapStateToProps,
  null
)(Events);
