import axios from 'axios';

const useFetchNewsletter = () => {
  const fetchNewsletter = email => {
    axios
      .post('/newsletter', email)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return {
    fetchNewsletter
  };
};

export default useFetchNewsletter;
