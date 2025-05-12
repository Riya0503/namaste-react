import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here
            // console.log(action)
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item, index) => index !== action.payload)
            // console.log(action.payload, state.items)
        },
        clearCart: (state) => {
            //here the state is a local variable and gets updated to [] but doesn't update the orignal state
            //for console loggin state you have use current(state)
            //console.log(current(state))
            // for console.log(state) this will give proxy obj which is not readable
            //state = [] // this will not work
            // console.log(state)
            state.items.length = 0; //[]

            //or this will also work. Because RTK says either mutate existing state or return new state
            //return {items : []}
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;