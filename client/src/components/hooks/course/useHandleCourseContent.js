import { useState } from 'react';

const useHanldeCourseContent = () => {
  const [courses, setCourses] = useState(undefined);

  const hanldeCourseContent = (res, cor) => {
    console.log(cor);
    let mapArr;
    mapArr = res.map(item => {
      return item[cor];
    });

    setCourses(() => {
      return mapArr;
    });
  };

  return {
    hanldeCourseContent,
    courses
  };
};

export default useHanldeCourseContent;
