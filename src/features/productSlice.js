import { createSlice, current } from "@reduxjs/toolkit";

import foodData from '../FoodData'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        searchData: foodData,
        data: foodData,
        selectedCategory: 'All',
        addCart: [],
        cartItem: []
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        searhData: (state, action) => {
            state.searchData = action.payload
        },
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
            let indexToRemove = state.addCart.findLastIndex(obj => obj.id === idToRemove);

            if (indexToRemove !== -1) {
                state.addCart.splice(indexToRemove, 1); // Removes the first object with the matching `id`
            }
        },
    }
})

// Export actions to be used in components
export const { setLoading, searhData, setCategory, addToCart, removeCart } = productSlice.actions;

// Export the reducer to be included in the store
export default productSlice.reducer;