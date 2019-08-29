import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Hooks
import useCalendar from "../../../hooks/global/useCalendar";
import useForm from "../../../hooks/auth/useForm";

//components
import AddEventPopUp from "./partials/AddEventPopUp";

//redux
import { addEvent } from "../../../../redux/actions/fetchEvents";

const AddEvents = ({ addEvent }) => {
  const { addEventCalendarRender, popup, setPopup, date } = useCalendar();
  const { input, onChange, onSubmit } = useForm();

  const popupHandler = () => {
    return setPopup(false);
  };

  return (
    <div className="addEvents">
      <div className="addEvents__calendar">{addEventCalendarRender()}</div>
      <div className="addEvents__events">
        <h1 className="addEvents__h1">Events</h1>
      </div>
      {popup && (
        <AddEventPopUp
          popupHandler={popupHandler}
          input={input}
          change={onChange}
          submit={onSubmit}
          date={date}
          addEvent={addEvent}
        />
      )}
    </div>
  );
};

AddEvents.propTypes = {
  addEvent: PropTypes.func
};

export default connect(
  null,
  { addEvent }
)(AddEvents);
