import React from 'react'
import { Redirect, Link } from 'react-router-dom'

// hooks
import useForm from '../../../hooks/auth/useForm'

const Signin = () => {
  const { input, error, redirect, onChange, onSubmit } = useForm()
  return (
    <div className='sign'>
      {redirect && <Redirect to='/dashboard' />}
      <h1 className='sign__h1'>Login</h1>
      <div className='sign__form'>
        <form onSubmit={onSubmit} name='signin'>
          <div className='sign__inputHolder'>
            <div className='sign__error' />
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
            {error && <div className='sign__error'> {error.password}</div>}
          </div>

          <div className='sign__btnHolder'>
            <button type='submit' className='sign__btn'>
              Uloguj se
            </button>
            <Link type='submit' className='sign__link' to='/dashboard/signup'>
              Registruj se
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
