const useGetCourseContent = () => {
  const getCourseContent = () => {
    return fetch('/data', {
      method: 'GET',
      aplication: 'json'
    })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return {
    getCourseContent
  };
};

export default useGetCourseContent;
