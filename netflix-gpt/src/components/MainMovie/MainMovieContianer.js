import React from 'react'
import { useSelector } from 'react-redux'
import MainMovieVideoBackground from './MainMovieVideoBackground';
import MainMovieVideoTitle from './MainMovieVideoTitle';

const MainMovieContianer = () => {
    const movie = useSelector((store) => store.movies?.nowPlayingMovies);
    // if(movie === null) return;
    if(!movie) return;

    const mainMovie = movie[1]
    // console.log(mainMovie)


    const {original_title, overview, id } = mainMovie
    return (
        <div>
            <MainMovieVideoTitle original_title={original_title}  overview={overview}/>
            <MainMovieVideoBackground movieId={id}/>
        </div>
    )
}

export default MainMovieContianer