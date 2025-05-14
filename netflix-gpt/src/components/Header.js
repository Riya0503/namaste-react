import React, { useEffect, useState } from 'react'
import { LOGO_IMG, DEFAULT_USER_ICON } from '../utils/constants'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate  = useNavigate();
  const location = useLocation();

  const [showSignOut, setShowSignOut] = useState(true);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
    
  }

  useEffect(() => {
    if(location.pathname === '/')
      setShowSignOut(false)
  }, [])
  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img className='w-44 px-8 py-2' src={LOGO_IMG} alt="logo"/>
        <div className='flex items-center'>
          <img className=' h-[38px] mx-4 my-6' src={DEFAULT_USER_ICON} alt="DEFAULT USER ICON"/>
          {showSignOut && <button className=' mx-4 my-6 p-2 bg-black text-white rounded-sm' onClick={handleSignOut}>Sign Out</button>}
        </div>
    </div>
  )
}

export default Header