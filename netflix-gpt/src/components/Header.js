import React, { useEffect } from 'react'
import { LOGO_IMG, DEFAULT_USER_ICON, BROWSE_LINK, HOME_LINK, SIGN_OUT } from '../utils/constants'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate  = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
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

  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img className='w-44 px-8 py-2' src={LOGO_IMG} alt="logo"/>
        {user && <div className='flex items-center'>
          <img className=' h-[38px] mx-4 my-6' src={DEFAULT_USER_ICON} alt="DEFAULT USER ICON"/>
          <button className=' mx-4 my-6 p-2 bg-black text-white rounded-sm' onClick={handleSignOut}>{SIGN_OUT}</button>
        </div>}
    </div>
  )
}

export default Header