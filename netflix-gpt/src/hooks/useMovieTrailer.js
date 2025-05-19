import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../utils/movieSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const mainMovieTrailerId = useSelector(store => store.movies.mainMovieTrailerId);
    const fetchMovieTrailer = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter(item => item.type === 'Trailer')
        const trailer = filterData.length ?  filterData[0] : json.results[0];
        dispatch(addTrailer(trailer))
    }

    useEffect(()=> {
        !mainMovieTrailerId && fetchMovieTrailer();
    })
}

export default useMovieTrailer;