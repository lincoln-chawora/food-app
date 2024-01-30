import {View, StyleSheet, Platform} from "react-native";

function CardWrapper({children, style}) {
    return (
        <View style={[styles.wrapper, style]}>
            {children}
        </View>
    );
}

export default CardWrapper;

const styles = StyleSheet.create({
    wrapper: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
});