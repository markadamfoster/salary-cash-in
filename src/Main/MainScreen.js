import React, { Component } from 'react'
import { View, Text } from 'react-native'

import SettingsButton from './_SettingsButton'

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Salary Cash-In',
      headerRight: <SettingsButton navigation={navigation} />
    }
  }

  render() {
    return (
      <View>
        <Text>MainScreen!</Text>
      </View>
    )
  }
}

export default MainScreen
