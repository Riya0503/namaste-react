import React from 'react'
import Header from './Header'
import MainMovieContianer from './MainMovie/MainMovieContianer';
import SecondaryMovieContainer from './SecondaryMovie/SecondaryMovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularPlayingMovies from '../hooks/usePopularPlayingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {

  useNowPlayingMovies();
  usePopularPlayingMovies();
  useUpcomingMovies();
  useTrendingMovies();

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