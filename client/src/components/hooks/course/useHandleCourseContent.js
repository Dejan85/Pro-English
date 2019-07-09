import React, { useState, useEffect } from 'react';

const useHanldeCourseContent = () => {
  const [courses, setCourses] = useState(undefined);
  let i = 0;

  const hanldeCourseContent = (course, cor) => {
    i = i + 1;
    return (
      <p>
        {i}
      </p>
    );
  };

  return {
    hanldeCourseContent,
    courses
  };
};

export default useHanldeCourseContent;
