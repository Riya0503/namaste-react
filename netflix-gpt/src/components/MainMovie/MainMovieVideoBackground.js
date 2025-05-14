import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../../hooks/useMovieTrailer';

const MainMovieVideoBackground = ({movieId}) => {
    useMovieTrailer(movieId)
    const trailer = useSelector((store) => store.movies?.mainMovieTrailerId)

    return (
        <div className='w-full h-full'>
            <iframe 
                className='w-full aspect-video'
                src={`https://www.youtube.com/embed/8B1EtVPBSMw?si=${trailer?.key}&autoplay=1&mute=1&controls=0&modestbranding=1&loop=1`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
        </div>
    )
}

export default MainMovieVideoBackground