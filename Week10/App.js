import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.font}>My name is Cecilia Lopez!</Text>
      <Text style = {styles.font}> My favorite food is Flan!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa8072',
    alignItems: 'center',
    justifyContent: 'center',
  },

  font: {
    color: "#fff"
  }
});
