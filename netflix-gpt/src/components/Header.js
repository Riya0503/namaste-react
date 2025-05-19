import React, { useEffect } from 'react'
import { LOGO_IMG, DEFAULT_USER_ICON, BROWSE_LINK, HOME_LINK, SIGN_OUT, SUPPORTED_LANG } from '../utils/constants'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearch, clearGPTMovieResult } from '../utils/gptSearchSlice';
import {setLanguage} from '../utils/configSlice';

const Header = () => {
  const navigate  = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gptSearch.showGPTSearch);

  
  const handleLanguage = (e) => {
    dispatch(setLanguage(e.target.value));

  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearch(!gptSearch))
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
            const { uid, email, displayName } = user;

            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            navigate(BROWSE_LINK);
        } else {
            dispatch(removeUser());
            navigate(HOME_LINK)
          // User is signed out
        }
    })
    return () => unsubscribe();
  }, [])


  useEffect(() => {
    return () => gptSearch && dispatch(clearGPTMovieResult())
  })
  return (
    <div className='fixed bg-gradient-to-b from-black z-10 w-screen bg-black/70 flex flex-col items-center md:justify-between md:flex-row '>
        <img className='w-48 md:w-44 px-8 py-2' src={LOGO_IMG} alt="logo"/>
        {user && <div className='flex items-center'>
          <img className=' h-[38px] mx-2 my-2 md:my-6' src={DEFAULT_USER_ICON} alt="DEFAULT USER ICON"/>
          <button className='text-white bg-gray-700  mx-2 my-2 md:my-6 p-2 rounded-sm' onClick={handleGPTSearchClick}>{gptSearch ? "Home" : "GPT Search"}</button>
          {gptSearch && <select className=' mx-2 my-2 md:my-6 p-[9px] bg-gray-700 text-white rounded-sm' onChange={(e) => handleLanguage(e)}>
            {
              SUPPORTED_LANG.map(lang => {
                return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>;
              })
            }
          </select>}
          <button className=' mx-2 my-2 md:my-6 p-2 bg-gray-700 text-white rounded-sm' onClick={handleSignOut}>{SIGN_OUT}</button>
        </div>}
    </div>
  )
}

export default Header