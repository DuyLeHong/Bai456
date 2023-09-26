import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';

const View2 = (props) => { 
  return (
    <View>
    <Text style={styles.bigText}> Function Component </Text>
    <Text style={styles.bigText}> {props.data} </Text>
    </View>
  )
}

export default View2