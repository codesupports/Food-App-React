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
            let idToRemove = action.payload;
            let indexToRemove = state.addCart.findIndex(obj => obj.id === idToRemove);

            if (indexToRemove !== -1) {
                state.addCart.splice(indexToRemove, 1); // Removes the first object with the matching `id`
            }
        },
    }
})

// Export actions to be used in components
export const { setCategory, addToCart, removeCart } = productSlice.actions;

// Export the reducer to be included in the store
export default productSlice.reducer;