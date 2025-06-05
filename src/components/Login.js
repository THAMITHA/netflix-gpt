import { checkValidaData } from '../utils/validate';

import Header from './Header'
import { useState, useRef } from 'react';
import { checkValidData } from "../utils/validate"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    // validate the form data
    // checkValidData(email, password)
    console.log(email.current.value)
    console.log(password.current.value)

    const message = checkValidData(email.current.value, password.current.value, name.current.value)
    setErrorMessage(message);
    //signIn/signUp
    
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg" alt='logo'/>
      </div>
      <form onClick={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700'/>}
        <input ref={email} type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-gray-700'/>
        <input ref={password} type="text" placeholder="Password" className='p-4 my-4 w-full bg-gray-700'/>
        <p className="text-red-500 font-bold text-lg py-2 ">{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered ? Sign In Now" }</p>
      </form>
    </div>
  )
}

export default Login