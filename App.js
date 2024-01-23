import React, {useState} from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
      <View style={styles.container}>
        <Text>Hello World!!!!</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 16
  },
});
