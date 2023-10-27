import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [lifeGoals, setLifeGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setLifeGoals((currentLifeGoals) => [...currentLifeGoals,
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setLifeGoals(currentLifeGoals => {
      return currentLifeGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light'></StatusBar>
    <View style={styles.appContainer}>

      <GoalInput visible={modalIsVisible}
                 onAddGoal={addGoalHandler}
                 onCancel={endAddGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList data={lifeGoals} renderItem={itemData => {
          return <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler} />
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        >
        </FlatList>
      </View>

      <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
