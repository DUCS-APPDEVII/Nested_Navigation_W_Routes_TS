/*
File: CurrentWeather.tsx          Date: 1/25/2024
   This screen defines the current weather display.  

   Modification Log
   1/28/2024 Changed the name of the screen from HomeScreen to
   CurrentWeather.  S. Sigman
   4/24/2024 Refactored to use types from types.ts and deleting
             unnecessary imports. S. Sigman
*/

import React from 'react' 
import { View, Text, StyleSheet, Button } from 'react-native' 
import { CurWeatherAppScreenProps } from '../types' 

function CurrentWeather({ route, navigation }: CurWeatherAppScreenProps) {
  const { name } = route.params
  return (
    <View style={styles.container}>
        <Text>MyWeather Home Screen</Text>
        <Text> Hello: {JSON.stringify(route.params.name)}</Text> 
        <Button title="Sign Out" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }) 

export default CurrentWeather