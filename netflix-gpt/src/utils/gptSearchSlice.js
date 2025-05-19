import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSeachSlice',
    initialState: {
        showGPTSearch: false,
        moviesName: null,
        moviesRes: null,

    },
    reducers: {
        toggleGPTSearch: (state, action) => {
            state.showGPTSearch = action.payload
        },
        // or (in this you have to just dispatch action without any args)
        // toggleGPTSearch: (state) => {
        //     state = !state;
        // }
        addGPTMovieResult : (state, action) => {
            // add multiple state in single action
            const {moviesName, moviesRes} = action.payload
            state.moviesName = moviesName;
            state.moviesRes = moviesRes;
        },
        clearGPTMovieResult : (state, action) => {
            state.moviesName = null;
            state.moviesRes = null;
        }
    
    }
})

export const {toggleGPTSearch, addGPTMovieResult, clearGPTMovieResult} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;