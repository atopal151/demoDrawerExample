import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerButton extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Icon
        name='ios-menu'
        size={24} />
      </TouchableOpacity>
    )
  }
}
