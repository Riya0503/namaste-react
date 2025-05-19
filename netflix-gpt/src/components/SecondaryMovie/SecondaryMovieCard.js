import React from 'react'
import {IMG_CND_URL} from '../../utils/constants'

const SecondaryMovieCard = ({movie}) => {
  if(!movie?.poster_path) return null;
  return (
    <div className='w-32 md:w-48 h-full pl-2'>
        <img className='w-full' src={IMG_CND_URL + movie?.poster_path} alt={movie?.original_title}/>
    </div>
  )
}

export default SecondaryMovieCard