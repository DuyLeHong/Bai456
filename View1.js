import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles';

export class View1 extends Component {

//   constructor (props) {
//     super(props)
//   }  

  render() {

    let mess = this.props.data;

    return (
      <View>
        <Text style={styles.bigText}> Class Component </Text>
        <Text style={styles.bigText}> {mess} </Text>
      </View> 
    )
  }
}

export default View1
