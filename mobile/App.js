import React from 'react';
import { StyleSheet } from 'react-native';
import TabNavigator from './navigation/Navigator';

export default function App() {
  return (
    <TabNavigator />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
