import React from 'react'
import account from "../assets/accountimg.png"
import logout from "../assets/Logout.png"
import {  useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import {auth} from "../utils/firebase"
import { useEffect } from 'react'
import {USERR} from "../utils/constant"
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constant'
import accountimg from "../assets/accountimg.png"

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=> store.user);
  const dispatch= useDispatch();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USERR,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>{
      //unsubscribe when components unmount
      unsubscribe();
    }
  }, []);


  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black z-40 flex justify-between'>
      <img 
      className="w-52 h-20 z-40"
      src={LOGO} alt="logo" />

      {
        user && (
          <div className='flex'> 
          <img  className="w-10 h-10 mt-2 "  src={accountimg} alt="" />
          <button onClick={handleSignOut} className='bg-red-500 w-25 h-10 ml-2 rounded-lg font-bold text-white p-1 m-2'>Sign Out</button>
        </div>
        )
      }
    </div>

  )

}

export default Header
   