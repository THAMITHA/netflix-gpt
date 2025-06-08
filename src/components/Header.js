import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";



const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleSignOut = () => {
    signOut(auth)
        .then(() => {})
      .catch((error) => {
        navigate("/error")
      });
  }
  useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate('/browse')
        } else {
            // User is signed out
            dispatch(removeUser())
            navigate("/")
          }
        });

        //unsubscribe when component unmounts
        return () => unsubscribe();
        
    }, []) 
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-[11rem]" src={LOGO} alt='logo'/>
      {user && <div className='flex'>
        <img className="w-12 h-12" alt="user icon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className="w-12 h-12 bg-red-700 font-bold text-white">Sign Out</button>
      </div>}
    </div>
  )
}

export default Header