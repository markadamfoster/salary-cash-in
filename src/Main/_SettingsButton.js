import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'

class SettingsButton extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  handlePress = () => {
    this.props.navigation.navigate('Settings')
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress} style={s.wrapper}>
        <Feather name="settings" size={22} color="rgba(255, 255, 255, 0.8)" />
      </TouchableOpacity>
    )
  }
}

export default SettingsButton

const s = StyleSheet.create({
  wrapper: {
    padding: 8
  }
})
