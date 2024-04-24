/*
  File App.tsx                  Date: 1/29/2024

  This file illustrates how to nest navigators and how to 
  provide static typing in TypeScript. The React Navigation
  package is used.  Annotated links for additional information 
  follow: 
  
  (Link 1) Video 82 in the React Native Tutorial from Codevolution provides
           a good discussion of nesting naviators.  The approach it 
           presents is used in this code sample.  This example does not 
           use TypeScript, but minus static type checking works. 
           https://www.youtube.com/watch?v=aDqSrYXbC0o&list=PLC3y8-rFHvwhiQJD1di4eRVN30WWCXkg1&index=82
  
  (Link 2)The React Navigation documentation page, "Type checking with TypeScript"
          provides a nice guide to typing React Navigation components. It requires
          careful reading, but the information is all there.
          https://reactnavigation.org/docs/typescript/#annotating-options-and-screenoptions

  (Link 3)The blog article from jscrambler, "Getting Started with React Navigation v6
          and TypeScript in React Native" provides a good walkthrough of the of 
          nesting and typing React Navigation navigators.        
          https://jscrambler.com/blog/getting-started-with-react-navigation-v6-and-typescript-in-react-native
 */
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "./screens/Login"
import { RootStackParamsList } from './types';
import CurWeatherNavigator  from './navigators/CurWeatherNavigator';

const Stack = createNativeStackNavigator<RootStackParamsList>()

const scrnOptions: NativeStackNavigationOptions = { 
  headerStyle: {
    backgroundColor: '#6200EE',
  },
  headerTintColor: '#fff',
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={scrnOptions}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen 
            name="CurWeatherNavigator"
            component={CurWeatherNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
