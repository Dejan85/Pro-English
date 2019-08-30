import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Hooks
import useCalendar from "../../../hooks/global/useCalendar";
import useForm from "../../../hooks/auth/useForm";

//components
import AddEventPopUp from "./partials/AddEventPopUp";
import CalendarEventCard from "../../home/calendar/CalendarEventCard";

//redux
import {
  addEvent,
  updateEvent,
  getAllEvents
} from "../../../../redux/actions/fetchEvents";

const AddEvents = ({
  addEvent,
  updateEvent,
  events,
  eventsChangeStatus,
  getAllEvents
}) => {
  const {
    addEventCalendarRender,
    popup,
    setPopup,
    date,
    currentDate,
    months
  } = useCalendar();
  const { input, setInput, onChange, onSubmit } = useForm();
  const [updateEventName, setUpdateEventName] = useState(false);

  const popupHandler = (id, title, time, description) => {
    if (id) {
      setInput({
        id,
        title,
        time,
        description
      });
      setUpdateEventName("updateEvent");
    }
    return setPopup(!popup);
  };

  useEffect(() => {
    eventsChangeStatus && getAllEvents();
  }, [eventsChangeStatus]);

  // sortiramo evente po datumima
  events &&
    events.sort((a, b) => {
      return parseInt(a.date.split(" ")[0]) - parseInt(b.date.split(" ")[0]);
    });

  return (
    <div className="addEvents">
      <div className="addEvents__calendar">{addEventCalendarRender()}</div>
      <div className="addEvents__events">
        <h1 className="addEvents__h1">Events</h1>
        {events &&
          events.map((item, index) => {
            const words = item.date.split(" ");
            if (months[currentDate.month] === words[1]) {
              return (
                <div key={index}>
                  <CalendarEventCard
                    title={item.title}
                    time={item.time}
                    description={item.description}
                    date={words}
                    addEvent={true}
                    id={item._id}
                    popupHandler={popupHandler}
                  />
                </div>
              );
            }
          })}
      </div>
      {popup && (
        <AddEventPopUp
          popupHandler={popupHandler}
          input={input}
          setInput={setInput}
          change={onChange}
          submit={onSubmit}
          date={date && date.date}
          addEvent={addEvent}
          updateEvent={updateEvent}
          name={updateEventName || "addEvent"}
        />
      )}
    </div>
  );
};

AddEvents.propTypes = {
  addEvent: PropTypes.func,
  updateEvent: PropTypes.func,
  events: PropTypes.array,
  eventsChangeStatus: PropTypes.number,
  getAllEvents: PropTypes.func
};

const mapStateToProps = state => ({
  events: state.events.events,
  eventsChangeStatus: state.events.eventsChangeStatus
});

export default connect(
  mapStateToProps,
  { addEvent, updateEvent, getAllEvents }
)(AddEvents);
