import React from 'react'
import SecondaryMovieList from './SecondaryMovieList'
import { useSelector } from 'react-redux'


const SecondaryMovieContainer = () => {
  const movieList = useSelector((store) => store.movies)
  return (
    <div className='relative mt-0 md:-mt-20'>
      <SecondaryMovieList title={"Now Playing Movies"} movieList={movieList.nowPlayingMovies}/>
      <SecondaryMovieList title={"Popular Movies"} movieList={movieList.popularMovies}/>
      <SecondaryMovieList title={"Upcoming Movies"} movieList={movieList.upcomingMovies}/>
      <SecondaryMovieList title={"Trending Movies"} movieList={movieList.trendingMovies}/>
      {/* 
        MovieList - Popular
          - title 
          - n * movie cards
        MovieList - Now Paying
        movieList - Trending
        movieList - horror
      */}

    </div>
  )
}

export default SecondaryMovieContainer