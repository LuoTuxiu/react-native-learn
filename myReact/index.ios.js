/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import { Text } from 'react-native'
// import { AppRegistry, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
//
// class MyReact extends Component {
//   render() {
//     return (
//       <View>
//         <FlatList
//           data = {[
//             {key: 1},
//             {key: 2},
//             {key: 3},
//             {key: 223},
//             {key: 323},
//             {key: 234},
//             {key: 33234},
//             {key: 8782},
//             {key: 387}
//           ]}
//           renderItem = {({item}) => <Text style={styles.item}>{item.key}</Text>}
//           >
//         </FlatList>
//       </View>
//     )
//   }
// }
//
//
// const styles  = StyleSheet.create({
//   red: {
//     color: 'red',
//     fontSize: 66
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44
//   }
// })
//
// AppRegistry.registerComponent('myReact', () => MyReact)

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, FlatList, SectionList, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';


class MainScreen extends Component {
  static navigationOptions = {
    title: 'welcom'
  }
  customPressHandlder = () => {
    alert('你妹')
  };
  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Button title='点我' onPress={() => {
          navigate('Profile', {name: 'Jane'})
        }} />
        <TouchableOpacity style={styles.button} onPress={this.customPressHandlder}>
          <Text style = {styles.buttonText}>确定</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'welcom2342'
  }
  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
          <Button title={this.props.name} onPress={() =>
            navigate('Profile', {name: 'Jane'})
          }></Button>
      </View>
    )
  }
}

const App = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen}
})

const styles  = StyleSheet.create({
  red: {
    color: 'red',
    fontSize: 66
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
})

AppRegistry.registerComponent('myReact', () => App)
