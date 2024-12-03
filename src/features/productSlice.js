import { createSlice, current } from "@reduxjs/toolkit";

import foodData from '../FoodData'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: foodData,
        selectedCategory: 'All',
        addCart: [],
        cartItem: []
    },
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        addToCart: (state, action) => {
            const existingItem = state.data.filter((xItem) => {
                return xItem.id === action.payload
            })
            state.addCart.push(...existingItem);
        },
        removeCart: (state, action) => {
            state.addCart = state.addCart.filter((item) => {
                return item.id !== action.payload.id && item[action.payload.index] == action.payload.index
            });
            // const existingItem = state.data.filter((xItem) => {
            //     return xItem.id !== action.payload
            // })
            // state.addCart.push(...existingItem);
        },
    }
})

// Export actions to be used in components
export const { setCategory, addToCart, removeCart } = productSlice.actions;

// Export the reducer to be included in the store
export default productSlice.reducer;