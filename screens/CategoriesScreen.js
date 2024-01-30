import React from 'react';

import {FlatList, StyleSheet} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        }
        return <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />
    }

    return <FlatList
        data={CATEGORIES}
        key={'#'}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        style={styles.gridItems}
    />
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    gridItems: {
        //flex: 1,
        //overflow: 'hidden'
    },
});