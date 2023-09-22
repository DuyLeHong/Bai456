import { View, Text } from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation, route}) => {
  return ( 
    <View> 
      <Text style={{fontSize: 50}} >ProfileScreen</Text>

      <Text style={{fontSize: 50}}>Thông tin SV:
       {route.params.name} - {route.params.tuoi} - {route.params.mssv}</Text>
    </View>
  )
}

export default ProfileScreen