import React from 'react'
import SecondaryMovieCard from './SecondaryMovieCard'

const SecondaryMovieList = ({title, movieList}) => {
    // console.log(movieList)
  return (
    <div className='px-4'>
        <h1 className='text-xl text-white p-2'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {
                    movieList && movieList.map((movie, i) => <SecondaryMovieCard key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default SecondaryMovieList