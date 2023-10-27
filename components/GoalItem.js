import {Text, View, StyleSheet, Pressable} from "react-native";
import React from "react";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                androud_ripple={{color: '#dddddd'}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        padding: 8,
        color: 'white'
    }
});