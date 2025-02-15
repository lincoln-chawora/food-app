import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import {StyleSheet, View, Text} from "react-native";
import {useSelector} from "react-redux";

function FavouritesScreen() {
    //const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

    //const favoriteMealIds = favoriteMealsCtx.ids;

    const favoriteMeals = MEALS.filter((mealItem) => {
        return favoriteMealIds.includes(mealItem.id)
    })

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    } else {
        return <MealsList items={favoriteMeals} />
    }
}

export default FavouritesScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});