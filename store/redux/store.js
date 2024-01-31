import {configureStore} from "@reduxjs/toolkit";
import favoritesReducer from './favorites';

export const store = configureStore({
    // Register created reducer to the store.
    reducer: {
        favoriteMeals: favoritesReducer
    }
});

