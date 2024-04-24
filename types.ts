/* 
 Types used in the application
 */

import { CompositeScreenProps, RouteProp } from "@react-navigation/native"
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { NativeStackScreenProps } from '@react-navigation/native-stack' 

// Navigation & Route types
export type RootStackParamsList = {
    Login: undefined,
    CurWeatherNavigator: {name: string},
  }
  
export type BottomTabNavParamsList  = {
    CurrentWeather: { name : string },
    Location: undefined,
    Journal: undefined
  }
  
export type CurWeatherAppScreenProps = CompositeScreenProps<
     BottomTabScreenProps<BottomTabNavParamsList,'CurrentWeather'>,
     NativeStackScreenProps<RootStackParamsList>
     >

export type NativeStackProps = NativeStackScreenProps<RootStackParamsList, 'Login'>

export type CurWeatherAppNavigatorRouteProp = RouteProp<BottomTabNavParamsList>