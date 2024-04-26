/* 
 Types used in the application
 */

import { CompositeScreenProps, NavigationProp, RouteProp } from "@react-navigation/native"
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack' 

// Navigation & Route types
export type RootStackParamsList = {
    Login: undefined,
    CurWeatherNavigator: {name: string},
  }
  
export type BottomTabNavParamsList  = {
    CurrentWeather: { name : string },
    Location: undefined,
    JournalStackNavigator: undefined
  }
  
export type CurWeatherAppScreenProps = CompositeScreenProps<
     BottomTabScreenProps<BottomTabNavParamsList,'CurrentWeather'>,
     NativeStackScreenProps<RootStackParamsList>
     >

export type NativeStackProps = NativeStackScreenProps<RootStackParamsList, 'Login'>

export type CurWeatherAppNavigatorRouteProp = RouteProp<BottomTabNavParamsList>

export type JournalStackPramList = {
      Journal: undefined,
      JournalEntry: {jid: number}
}

export type JournalScreenProp = RouteProp<JournalStackPramList,'JournalEntry'>

export type JournalButtonProps = {
    jid: number, 
    title: string, 
    navigation: NativeStackNavigationProp<JournalStackPramList,'Journal',undefined>  //JournalScreenProp
}

export type JournalStackProps = NativeStackScreenProps<JournalStackPramList, 'Journal'>

export type JournalType = {
  jid: number,
  title: string,
}