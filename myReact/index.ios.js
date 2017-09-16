/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
//
// class MyReact extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//       </View>
//     )
//   }
// }
//
//
// const styles  = StyleSheet.create({
//   red: {
//     color: 'red'
//   }
// })
//
// AppRegistry.registerComponent('MyReact', () => MyReact)


import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class MyReact extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('MyReact', () => MyReact);
