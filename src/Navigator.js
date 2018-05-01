import { StackNavigator } from 'react-navigation'

import { colors } from './Constants'
import MainScreen from './Main/MainScreen'
import SettingsScreen from './Settings/SettingsScreen'

export default StackNavigator(
  {
    Main: { screen: MainScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.dark
      },
      headerTintColor: colors.light,
      headerTitleStyle: {
        fontWeight: 'bold',
        color: colors.light
      }
    }
  }
)
