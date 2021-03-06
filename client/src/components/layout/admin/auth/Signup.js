import React from 'react'
import { Redirect } from 'react-router-dom'

// hooks
import useForm from '../../../hooks/auth/useForm'

const Signup = () => {
  const { input, error, redirect, onChange, onSubmit } = useForm()

  return (
    <div className='sign'>
      {redirect && <Redirect to='signin' />}
      <h1 className='sign__h1'>Registracija</h1>
      <div className='sign__form'>
        <form onSubmit={onSubmit} name='signup'>
          <div className='sign__inputHolder'>
            <div className='sign__error' />
            <label className='sign__label'>Name</label>
            <input
              className='sign__input'
              name='firstname'
              type='text'
              value={input.firstname}
              onChange={onChange}
            />
            {error && <div className='sign__error'>{error.firstname}</div>}
          </div>
          <div className='sign__inputHolder'>
            <label className='sign__label'>Prezime</label>
            <input
              className='sign__input'
              name='lastname'
              type='text'
              value={input.lastname}
              onChange={onChange}
            />
            {error && <div className='sign__error'>{error.lastname}</div>}
          </div>
          <div className='sign__inputHolder'>
            <label className='sign__label'>Email</label>
            <input
              className='sign__input'
              name='email'
              type='email'
              value={input.email}
              onChange={onChange}
            />
            {error && (
              <div className='sign__error'>
                {error.email || error.serverError}
              </div>
            )}
          </div>
          <div className='sign__inputHolder'>
            <label className='sign__label'>Password</label>
            <input
              className='sign__input'
              name='password'
              type='password'
              value={input.password}
              onChange={onChange}
            />
            {error && (
              <div className='sign__error'>
                {error.password || error.confirmPassword}
              </div>
            )}
          </div>
          <div className='sign__inputHolder'>
            <label className='sign__label'>Confirm Password</label>
            <input
              className='sign__input'
              name='confirmPassword'
              type='password'
              value={input.confirmPassword}
              onChange={onChange}
            />
          </div>
          <div className='sign__btnHolder'>
            <button type='submit' className='sign__btn'>
              Registruj se
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
