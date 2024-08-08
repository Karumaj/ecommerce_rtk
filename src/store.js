import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Components/CartSlice'; // originally 'cartReducer'

const store = configureStore({
    reducer: {
        cart: cartReducer, // originally 'cartReducer'
    },
});

export default store
