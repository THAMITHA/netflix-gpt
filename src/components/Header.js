import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";



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
      <img className="w-[11rem]" src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
      {user && <div className='flex'>
        <img className="w-12 h-12" alt="user icon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className="w-12 h-12 bg-red-700 font-bold text-white">Sign Out</button>
      </div>}
    </div>
  )
}

export default Header