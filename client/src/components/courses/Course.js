import React from "react";

//components
import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <div className="course">
      <h2 className="h2">Kursevi</h2>
      <div className="course__content container-flex-row">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Course;
