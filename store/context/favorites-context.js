import {createContext, useState} from "react";

// Export context to make it available to use with useContext(FavoritesContext).
export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    function addFavoriteHandler(id) {
        // Update favorite state by updating existing mealIds array with new id.
        setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavoriteHandler(id) {
        // Update favorite state by filtering out id from current array of favourites.
        setFavouriteMealIds((currentFavIds) =>
            currentFavIds.filter((mealId) => mealId !== id)
        );
    }

    // Values to be passed to context provider and available for use on all components wrapped in
    // <FavoritesContextProvider>
    const value = {
        ids: favouriteMealIds, // favouriteMealIds is the state of all favourite meal ids
        addFavorite: addFavoriteHandler, // addFavorite is the function responsible for adding a new favourite
        removeFavorite: removeFavoriteHandler, // removeFavorite is the function responsible for removing a new favourite
    }
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;