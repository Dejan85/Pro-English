import React, { useState } from 'react';

// hooks
// import useContactForm from '../../hooks/contact/useContactForm';
import useForm from '../../hooks/auth/useForm';

// Components
import Map from './paritals/Map';

const Contact = () => {
  const { input, error, onChange, onSubmit } = useForm();
  // const { contactForm } = useContactForm();
  const [map] = useState(() => {
    return <Map />;
  });

  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  return (
    <div className='contact'>
      {reset}
      <div className='contact__map'>
        {map}
      </div>
      <div className='contact__content'>
        <h1 className='contact__h1'>Kontakt</h1>
        <span className='contact__span'>
          Pisite nam o svemu sto vas interesuje, tu smo da odgovorimo na svako
          vase pitanje.
        </span>
        <div className='contact__form'>
          <form onSubmit={onSubmit} name='contact'>
            <div className='contact__input'>
              <label>Ime</label>
              <input
                name='firstname'
                type='text'
                value={input.firstname}
                onChange={onChange}
              />

              {error &&
                <div className='sign__error'>
                  {error.firstname}
                </div>}
            </div>
            <div className='contact__input'>
              <label>Email</label>
              <input
                name='email'
                type='email'
                value={input.email}
                onChange={onChange}
              />
              {error &&
                <div className='sign__error'>
                  {error.email || error.serverError}
                </div>}
            </div>
            <div className='contact__input'>
              <label>Title</label>
              <input
                name='title'
                type='text'
                value={input.title}
                onChange={onChange}
              />
              {error &&
                <div className='sign__error'>
                  {error.title}
                </div>}
            </div>
            <div className='contact__input'>
              <label>Pitanje</label>
              <textarea
                rows='7'
                name='question'
                type='text'
                value={input.question}
                onChange={onChange}
              />
              {error &&
                <div className='sign__error'>
                  {error.question}
                </div>}
            </div>
            <div className='contact__input'>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// https://www.youtube.com/watch?v=Pf7g32CwX_s
