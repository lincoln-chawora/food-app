import {Pressable, Text, View, Image, StyleSheet} from "react-native";
import CardWrapper from "./CardWrapper";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";


function MealItem({id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    return (
        <CardWrapper>
            <Pressable onPress={pressHandler} android_ripple={{ color: '#ccc'}}
                       style={({pressed}) => pressed ? styles.buttonPressed : null}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability} />
                </View>
            </Pressable>
        </CardWrapper>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
      borderRadius: 8,
      overflow: 'hidden'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    }
});