const useContactForm = () => {
  const contactForm = e => {
    e.preventDefault();
    console.log('radi');
    fetch('/contact', {
      method: 'GET'
    });
  };

  return {
    contactForm
  };
};

export default useContactForm;
