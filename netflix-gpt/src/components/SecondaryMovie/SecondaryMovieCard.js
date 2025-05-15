import React from 'react'
import {IMG_CND_URL} from '../../utils/constants'

const SecondaryMovieCard = ({movie}) => {
  return (
    <div className='w-40 h-full pl-2'>
        <img className='w-full' src={IMG_CND_URL + movie?.poster_path} alt={movie?.original_title}/>
    </div>
  )
}

export default SecondaryMovieCard