import React from 'react'
import { LOGO_IMG } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black z-10'>
        <img className='w-44 px-8 py-2' src={LOGO_IMG} alt="logo"/>
    </div>
  )
}

export default Header