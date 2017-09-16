/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
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
import { AppRegistry, StyleSheet, Text, View, ScrollView, FlatList, SectionList } from 'react-native';

class MyReact extends Component {
  render() {
    return (
      <View>
        <SectionList
          sections = {[
            {title: 'D', data: ['lala']}
          ]}
          renderItem = { ({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader = { ({section}) => <Text>{section.title}</Text>}
          ></SectionList>
      </View>
    )
  }
}


const styles  = StyleSheet.create({
  red: {
    color: 'red',
    fontSize: 66
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})

AppRegistry.registerComponent('myReact', () => MyReact)
