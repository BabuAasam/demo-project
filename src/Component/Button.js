import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = (props) => {
    const {text, onPress, style} = props
  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity onPress={onPress}
          style={[styles.Button, style]}
        >
          <Text style={{color:'#FFFFFF'}}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button
const styles = StyleSheet.create({
    Button:{
      backgroundColor: '#FF0059',
      height: 50,
      width: '87%',
      borderRadius: 16,
      alignItems:'center',
      justifyContent:'center',
    },
});