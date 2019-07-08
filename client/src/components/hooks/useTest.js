const useTest = () => {
  const test = () => {
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

  return { test };
};

export default useTest;
