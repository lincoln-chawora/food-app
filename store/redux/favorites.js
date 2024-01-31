import {createSlice} from "@reduxjs/toolkit";

// This slice is for defining state, data and actions that can change data. For example here the initial state is the
// ids of all the favorite meals and the actions which can change that state/data are add and remove which do as
// described, you could also have an update action here if the situation requires it.
const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: [],
    },
    reducers: {
      // State param holds the latest state, i.e current favorites list. Here we add to the state ids using push,
      // getting the action payload id.
      // Action holds information that's passed to it when invoking the reducer method
      addFavorite: (state, action) => {
          state.ids.push(action.payload.id);
      },
      removeFavorite: (state, action) => {
          state.ids.slice(state.ids.indexOf(action.payload.id), 1)
      }
    }
});

// Export actions so that they can be invoked from other places within the app.
export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;