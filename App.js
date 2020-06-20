import React, { Component } from 'react'
import {View,Text} from 'react-native'
import SignIn from './src/screens/SignIn'
export default class App extends Component{
  render(){
    return(
      <View>
       <SignIn />
      </View>
    )
  }
}