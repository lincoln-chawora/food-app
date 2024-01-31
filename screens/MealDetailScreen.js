import {MEALS} from "../data/dummy-data";
import {Image, StyleSheet, Text, View, ScrollView} from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useContext, useLayoutEffect} from "react";
import IconButton from "../components/IconButton";
import {FavoritesContext} from "../store/context/favorites-context";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../store/redux/favorites";

function MealDetailScreen({route, navigation}) {
    //const favoriteMealsCtx = useContext(FavoritesContext);

    // Get data from redux store, "state.favoriteMeals" refers to the reducer defined in the store, and ".ids" refers to
    // the slice defined in that reducer (initial state)
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    // Dispatch hook is used to dispatch redux actions (addFavorite & removeFavorite).
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    // Check if the screens meal is in the redux stores favourite meal ids. (GET)
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            // Invoke remove action and pass object of data being removed, in this case it's the id of the meal because
            // the action requires an id to function. (DELETE)
            dispatch(removeFavorite({id: mealId}))
            //favoriteMealsCtx.removeFavorite(mealId)
        } else {
            // Works like api PUT request.
            dispatch(addFavorite({id: mealId}))
            //favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color="white"
                    onPress={changeFavoriteStatusHandler}/>
            }
        })
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image}  source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        margin: 8,
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
});