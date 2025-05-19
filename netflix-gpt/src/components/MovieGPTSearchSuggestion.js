import React from 'react'
import { useSelector } from 'react-redux'
import SecondaryMovieList from '../components/SecondaryMovie/SecondaryMovieList'

const MovieGPTSearchSuggestion = () => {
    const {moviesName, moviesRes } = useSelector(store => store.gptSearch)
    console.log(moviesName, moviesRes )
    if(!moviesName) return null;
    return (
        <div className=' m-4 py-4 bg-black/60'>
            {moviesName?.map((movies, index) => <SecondaryMovieList key={movies} title={movies} movieList={moviesRes[index]}/>)}
        </div>
    )
}

export default MovieGPTSearchSuggestion