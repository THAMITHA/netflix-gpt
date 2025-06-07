import { checkValidaData } from '../utils/validate';

import Header from './Header'
import { useState, useRef } from 'react';
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    // validate the form data
    // checkValidData(email, password)
    console.log(email.current.value)
    console.log(password.current.value)

    const message = checkValidData(email.current.value, password.current.value, name.current?.value)
    setErrorMessage(message);

    if(message) return;

    //signIn/signUp
    if(!isSignInForm){
      //signUp logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://avatars.githubusercontent.com/u/71762248?v=4"
        })
        .then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
        });
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    } 
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });
      }  
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
        <p className="py-4 cursor-pointer" onClick={ toggleSignInForm }>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered ? Sign In Now" }</p>
      </form>
    </div>
  )
}

export default Login