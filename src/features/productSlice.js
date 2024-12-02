import { createSlice } from "@reduxjs/toolkit";

import foodData from '../FoodData'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: foodData,
        selectedCategory: 'All',
        addCart: []
    },
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        addCartData: (state, action) => {
            state.addCart.push(action.payload);
        },
    }
})

// Export actions to be used in components
export const { setCategory, addCartData } = productSlice.actions;

// Export the reducer to be included in the store
export default productSlice.reducer;