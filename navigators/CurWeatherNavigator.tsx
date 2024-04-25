/*
File: AuthWeatherApp.tsx          Date: 1/25/2024
   This file provides navigation for the MyWeather app.  See the README.md file
   for the application specifications

   Modification Log
   1/28/2024 Adapted the 2023 starter code to use Typescipt.  S. Sigman
   1/29/2024 Renamed App.tsx and modified for use with nested Navigators. S. Sigman
   4/22/2024 Adapted to illustrate using Route props and correct typing
             S. Sigman
   4/24/2024 Cleaned up code by refractoring to use types from types.ts and
             deleting unnecessary imports. S. Sigman       
*/

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import { useRoute } from '@react-navigation/native'

import Ionicons from '@expo/vector-icons/Ionicons'

import CurrentWeather from '../screens/CurrentWeather'
import Location from '../screens/Location'
import Journal from '../screens/Journal'

// Navigation Types and Prop Types
import { RootStackParamsList,
  BottomTabNavParamsList,
  CurWeatherAppNavigatorRouteProp } from '../types'
import JournalStackNavigator from './JournalStackNavigator'

const Tab = createBottomTabNavigator<BottomTabNavParamsList>()

function CurWeatherNavigator() {
    const route = useRoute<CurWeatherAppNavigatorRouteProp>()
    let theUser: string = ''
    if (route.params !== undefined)
      theUser = route.params.name
    return (
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName : keyof typeof Ionicons.glyphMap = 'home'
                if (route.name ==='CurrentWeather') {
                  iconName = focused 
                    ? 'home'
                    : 'home-outline' 
                } else if (route.name==='Location') {
                  iconName = focused ? 'list' : 'list-outline' 
                } else if (route.name==='JournalStackNavigator') {
                  iconName = focused ? 'documents' : 'documents-outline' 
                }

                return <Ionicons name={iconName} size={size} color={color} />
              },
              tabBarActiveTintColor: '#03DAC6',
              tabBarInactiveTintColor: '#018786',
              tabBarActiveBackgroundColor: '#6200EE',
              tabBarInactiveBackgroundColor: '#3700B3'
            })}
          >
            <Tab.Screen
              name="CurrentWeather"
              component={CurrentWeather}
              options={ {
                title: 'MyWeather', 
                headerStyle: {
                  backgroundColor: '#6200EE',
                },
                headerTitleStyle: {
                  color: '#fff',
                },
              }}
              initialParams={{name:theUser}}
            />
            <Tab.Screen 
              name ='Location'
              component={Location}
              options={ {
                title: 'Locations',
                headerStyle: {
                  backgroundColor: '#6200EE',
                },
                headerTitleStyle: {
                  color: '#fff',
                },
              }} 
            />
            <Tab.Screen 
              name = 'JournalStackNavigator'
              component={JournalStackNavigator}
              options={ {
                title: 'Journal Entries',
                headerStyle: {
                  backgroundColor: '#6200EE',
                },
                headerTitleStyle: {
                  color: '#fff',
                },
              }} 
            />
          </Tab.Navigator>
    ) 
} 

export default CurWeatherNavigator