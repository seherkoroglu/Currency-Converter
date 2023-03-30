/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/header';
import Converter from './src/converter';

export default class App extends Component {
  render() {
  return (
    <View style = {styles.container}>
      <Header headerText={'CURRENCY CONVERTER'} />
      <Converter />
    </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    flex: 1,
},
});
