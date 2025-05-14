// rafce(react arrow function component export) - to genrate boilerplate of the component and export
import React from 'react'
import Header from './Header'
import { BACKGROUND_IMG } from '../utils/constants'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div className=''>
            <Header/>
            <div className='absolute h-[100%]'>
                <img className=' h-[100%]' src={BACKGROUND_IMG} alt="background-img"/>
            </div>
            <LoginForm/>
        </div>
    )
}

export default Login