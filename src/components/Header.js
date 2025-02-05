import React from 'react'
import account from "../assets/accountimg.png"
import logout from "../assets/Logout.png"
import {  useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import {auth} from "../utils/firebase"

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=> store.user);
  console.log(user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black z-40 flex justify-between'>
      <img 
      className="w-52 h-20 z-40"
      src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

      {
        user && (
          <div className='flex'> 
          <img  className="w-12 h-12 mt-1"  src={user?.photoURL || account} alt="" />
          <button onClick={handleSignOut} className='bg-red-500 w-25 h-10 ml-2 rounded-lg font-bold text-white p-1 m-2'>Sign Out</button>
        </div>
        )
      }
    </div>

  )

}

export default Header
   