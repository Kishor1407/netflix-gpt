import React from 'react'
import account from "../assets/accountimg.png"
import logout from "../assets/Logout.png"
import {  useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import {auth} from "../utils/firebase"
import { useEffect } from 'react'
import {supportedLanguages, USERR} from "../utils/constant"
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constant'
import netflixlogin from "../assets/netflixlogin.jpg"
import { toggleGptSearchView } from '../utils/GPTSlice'
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=> store.user);
  const dispatch= useDispatch();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  const handleGPTSearchCLick=()=>{
    //Toggle GPT search Button
    console.log("action is dispatching")
    dispatch(toggleGptSearchView());

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

  const handleLanguageChange=(event)=>{
    console.log(event.target.value);
    dispatch(changeLanguage(event.target.value));
  }


  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black z-40 flex justify-between'>
      <img 
      className="w-52 h-20 z-40"
      src={LOGO} alt="logo" />

      {
        user && (
          <div className='flex'> 
          {
            showGptSearch &&          <select className='px-4 mt-4 mb-8 mx-2 bg-red-500 text-white rounded-lg' onChange={handleLanguageChange}>
            {supportedLanguages.map(lang=>
              <option className='' value={lang.identifier} key={lang.identifier}>{lang.name}</option>
            )}

          </select>
          }
          <button onClick={handleGPTSearchCLick} className='px-4 mt-4 mb-8 mx-2 rounded-lg bg-red-500 text-white'>{showGptSearch?"Home Page" : "GPT Search"}</button>
          <img  className="w-10 h-10 mt-2 rounded-sm"  src={netflixlogin} alt="" />
          <button onClick={handleSignOut} className=' w-25 h-10 ml-2 rounded-lg font-bold text-white p-1 m-2'>(Sign Out)</button>
        </div>
        )
      }
    </div>

  )

}

export default Header
   