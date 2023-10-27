import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View, Image} from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/bullseye.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your life goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                >
                </TextInput>

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282"></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={addGoalHandler} color="#5e0acc"></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#8c64ff'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});
