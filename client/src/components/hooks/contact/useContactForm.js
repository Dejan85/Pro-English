const useContactForm = () => {
  const contactForm = data => {
    console.log(data);
    return fetch('/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return {
    contactForm
  };
};

export default useContactForm;
