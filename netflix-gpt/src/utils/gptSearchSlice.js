import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSeachSlice',
    initialState: {
        showGPTSearch: false
    },
    reducers: {
        toggleGPTSearch: (state, action) => {
            state.showGPTSearch = action.payload
        }
        // or (in this you have to just dispatch action without any args)
        // toggleGPTSearch: (state) => {
        //     state = !state;
        // }
    }
})

export const {toggleGPTSearch} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;