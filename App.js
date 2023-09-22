import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import HomeScreen from './HomeScreen';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Button } from 'react-native';

import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


