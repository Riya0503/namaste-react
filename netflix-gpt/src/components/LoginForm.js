// import Link from 'br'
import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        updateProfile
    }from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice';
import {SIGN_IN, 
        SIGN_UP, 
        NEW_USER_SIGN_UP_STRING , 
        ALREADY_REGISTERED_SIGN_IN_STRING
    } from '../utils/constants'

const LoginForm = () => {
    const dispatch = useDispatch();
    const [signInForm, setSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState("")
    const email = useRef("");
    const password = useRef("");
    const name = useRef("");

    const toggleSignForm = () => {
        setSignInForm(!signInForm)
    }

    const handleFormSubmit = () => {
        // valiadate form data;
        const isValid = checkValidData(email.current.value, password.current.value)
        console.log(isValid)
        setErrorMsg(isValid)

        if(isValid === null){
            //create new user
            if(signInForm){
                // sign in logic
                console.log("signing in")
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorMessage)
                    console.log(errorCode , ":", errorMessage)
                });

            }else{
                console.log("signing Up")
                //sign up logic
                createUserWithEmailAndPassword(
                    auth, 
                    email.current.value, 
                    password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value
                    }).then(() => {
                        // Profile updated!
                        //have to update the store also after updating the display name.
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        setErrorMsg(error.message)
                        // ...
                    });
                    console.log(user)
                
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorMessage)
                    console.log(errorCode , ":", errorMessage)
                    // ..
                });
            }

        }
    }

    return (
        <div className='absolute w-full md:w-[50%] md:h-[50%] md:translate-x-[50%] translate-y-[50%] '>
            <form onSubmit={(e) => e.preventDefault()} className='flex  flex-col bg-black/80 z-10 p-16'>
                <label className='text-3xl text-white pb-6'>{signInForm ? SIGN_IN : SIGN_UP}</label>
                {
                    !signInForm && 
                    <input ref={name} type='text' placeholder='Full Name' className='p-2 m-2 my-4 rounded-sm bg-gray-700/90 font-white'/>
                }
                <input ref={email} type='text' placeholder='Email address' className='p-2 m-2 my-4 rounded-sm bg-gray-700/90 font-white'/>
                <input ref={password} type='password' placeholder='password' className='p-2 m-2 my-4  rounded-sm bg-gray-700/90'/>
                {errorMsg && <span className='p-2 text-red-600'>{errorMsg}</span>}
                <button className='p-2 m-2 my-4  bg-red-600 text-white rounded-sm' onClick={handleFormSubmit}>{signInForm ? SIGN_IN : SIGN_UP}</button>
                <span className='text-white underline cursor-pointer' onClick={toggleSignForm}>{signInForm ? NEW_USER_SIGN_UP_STRING : ALREADY_REGISTERED_SIGN_IN_STRING}</span>
            </form>
        </div>
    )
}

export default LoginForm