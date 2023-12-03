import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
        console.log(error)
  return (
    <div className='error-page'>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i><b>{error.statusText } { error.status}</b></i>
    </p>
  </div>
  )
}

export default Error
