import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Header extends Component {
  render() {
    const {header, headerText} = styles;
    return (
      <View style={header}>
        <Text style={headerText}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#788B91',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 40,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
    }
});
export default Header;