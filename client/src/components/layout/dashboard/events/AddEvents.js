import React from "react";

//Hooks
import useCalendarTest from "../../../hooks/global/useCalendar";

//components
import AddEventPopUp from "./partials/AddEventPopUp";

const AddEvents = () => {
  const { addEventCalendarRender, popup, setPopup } = useCalendarTest();

  const popupHandler = () => {
    return setPopup(false);
  };

  return (
    <div className="addEvents">
      <div className="addEvents__calendar">{addEventCalendarRender()}</div>
      <div className="addEvents__events">
        <h1 className="addEvents__h1">Events</h1>
      </div>
      {popup && <AddEventPopUp popupHandler={popupHandler} />}
    </div>
  );
};

export default AddEvents;
