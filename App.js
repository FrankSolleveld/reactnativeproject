import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import EventList from './EventList'
import EventForm from './EventForm'
import { createStackNavigator, createAppContainer } from 'react-navigation'

// StackNavigator is deprecated, we had to fix it this way to make it work. 
const AppNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events'
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add Event'
    })
  }
})

export default createAppContainer(AppNavigator)