import {Pressable, StyleSheet, Text, View } from "react-native";
import CardWrapper from "./CardWrapper";

function CategoryGridTile({title, color, onPress}) {
    return (
        <CardWrapper style={styles.gridItem}>
            <Pressable
                onPress={onPress}
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]
            }>
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </CardWrapper>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});
