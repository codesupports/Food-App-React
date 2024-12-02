import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';
import addToCartSlice from './features/AddToCartSlice';

// Create a Redux store
const store = configureStore({
    reducer: {
        product: productReducer,
        addToCart: addToCartSlice
    },
});

export default store;