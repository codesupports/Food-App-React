import { createSlice } from "@reduxjs/toolkit";

import foodData from '../FoodData'

const addToCartSlice = createSlice({
    name: 'addToCartSlice',
    initialState: {
        itemsId: [],
        cartItem:[]
    },
    reducers: {
        addToCartDataFunc: (state, action) => {
            state.itemsId.push(action.payload);
            
        },

    }
})

export const { addToCartDataFunc } = addToCartSlice.actions;
export default addToCartSlice.reducer;