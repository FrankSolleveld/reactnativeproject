import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import EventList from './EventList'
import { createStackNavigator, createAppContainer } from 'react-navigation'

// StackNavigator is deprecated, we had to fix it this way to make it work.
const AppNavigator = createStackNavigator({
  Home: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events'
    })
  }
})

export default createAppContainer(AppNavigator)