import React from "react";

//component
import Card from "../home/Card";

const HomeTeacher = () => {
  return (
    <div className="homeTeachers">
      <h3 className="homeBlog__h3">Profesori</h3>
      <div className="homeBlog__line" />
      <div className="homeBlog__content">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HomeTeacher;
