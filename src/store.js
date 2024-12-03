import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';

// Create a Redux store
const store = configureStore({
    reducer: {
        product: productReducer
    },
});

export default store;