import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './App';

/**
 * @typedef {Component} NewType
 */

export default class App extends React, NewType {

  render(){
    return (
      <View style={styles.container}>
        <Text>VERT</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}
