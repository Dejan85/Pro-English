import React from "react";
import { Link } from "react-router-dom";

//components
import Calendar from "./calendar/Calendar";
import CalendarEventCard from "./calendar/CalendarEventCard";

const HomeEvent = () => {
  return (
    <div className="homeEvent">
      <div className="homeEvent__calendar">
        <h3 className="homeEvent__h3">Kalendar dogadjaja</h3>
        <Calendar />
      </div>
      <div className="homeEvent__latest">
        <h3 className="homeEvent__h3">Zadnji dogadjaji</h3>
        <div className="homeEvent__latest__card">
          <CalendarEventCard />
          <CalendarEventCard />
          <CalendarEventCard />
          <CalendarEventCard />

          <Link className="homeEvent__link" to="/dogadjaji">
            Vidi sve
          </Link>
        </div>
      </div>
      <div className="homeEvent__upcoming">
        <h3 className="homeEvent__h3">Buduci dogadjaji</h3>
        <div className="homeEvent__upcoming__content">
          <ul className="homeEvent__upcoming__list">
            <li className="homeEvent__upcoming__item">
              <p className="homeEvent__upcoming__p">
                Casovi aktivne konverzacije
              </p>
              <span className="homeEvent__upcoming__span">
                Ponedeljak, 19:00 - 21:00
              </span>
            </li>
            <li className="homeEvent__upcoming__item">
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
            </li>
            <Link className="homeEvent__link-2" to="/dogadjaji">
              Vidi sve
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeEvent;
