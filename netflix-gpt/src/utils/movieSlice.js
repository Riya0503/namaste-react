import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        nowPlayingMovies: null,
        mainMovieTrailerId : null
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailer: (state, action) => {
            state.mainMovieTrailerId = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailer} = movieSlice.actions;
export default movieSlice.reducer;