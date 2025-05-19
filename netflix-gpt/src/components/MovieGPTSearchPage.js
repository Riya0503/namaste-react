import React from 'react';
import MovieGPTSearchBar from './MovieGPTSearchBar';
import MovieGPTSearchSuggestion from './MovieGPTSearchSuggestion';
import { BACKGROUND_IMG } from '../utils/constants'


const MovieGPTSearchPage = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className=' h-screen w-screen object-cover' src={BACKGROUND_IMG} alt='background_img'/>
      </div>
      <div className='absolute pt-[45%] md:pt-[30%]  w-screen'>
        <MovieGPTSearchBar/>
        <MovieGPTSearchSuggestion/>
      </div>
    </>
  )
}

export default MovieGPTSearchPage