import React, {useState} from 'react';
import {Button, Switch, StyleSheet, Text, TextInput, View} from 'react-native';
import {SelectList} from "react-native-dropdown-select-list"

export default function App() {
    const [isSent, setIsSent] = useState(false);
    const toggleSwitch = () => setIsSent(previousState => !previousState);

    const [selected, setSelected] = useState("");

    const grades = [
        {key:'1', value:'V1'},
        {key:'2', value:'V2'},
        {key:'3', value:'V3'},
        {key:'4', value:'V4'},
        {key:'5', value:'V5'},
        {key:'6', value:'V6'},
        {key:'7', value:'V7'},
    ];

    const colours = [
        {key:'1', value:'White'},
        {key:'2', value:'Green'},
        {key:'3', value:'Black'},
        {key:'4', value:'Blue'},
        {key:'5', value:'Pink'},
        {key:'6', value:'Red'},
        {key:'7', value:'Purple'},
    ];

    let count = 1;
    const [buttonText, setButtonText] = useState(count)

    const addOne = (count) => {
        count++;
        setButtonText(count);
    }

    const minusOne = (count) => {
        count--;
        setButtonText(count);
    }

    return (
        <View style={styles.container}>
            <SelectList
                defaultOption={{key: 1, value: "V1"}}
                setSelected={(val) => console.log(val)}
                data={grades}
                save="value"
            />

            <View style={styles.attemptButtonsContainer}>
                <Button
                    onPress={() => {addOne(buttonText)}}
                    title={buttonText.toString()}>
                </Button>

                <Button
                    onPress={() => {minusOne(buttonText)}}
                    title="-">
                </Button>
            </View>

            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isSent ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isSent}
            />

            <SelectList
                defaultOption={{key: 1, value: "White"}}
                setSelected={(val) => setSelected(val)}
                data={colours}
                save="value"
            />

            <Button title="Save"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    attemptButtonsContainer: {
        flexDirection: 'column',
        rowGap: 5
    }
});
