import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainMovieContianer from './MainMovie/MainMovieContianer';
import SecondaryMovieContainer from './SecondaryMovie/SecondaryMovieContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      {/* 
          Main Container
            - video background
            - video title
          secondary Container
            - list of movies * n
              - movie cards * n
       */}
       <MainMovieContianer/>
       <SecondaryMovieContainer/>
    </div>
  )
}

export default Browse