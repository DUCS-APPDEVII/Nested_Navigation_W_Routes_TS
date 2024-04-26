import { StyleSheet } from 'react-native';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack'
import Journal from "../screens/Journal";
import JournalEntry from '../screens/JournalEntry'
import { JournalStackPramList } from '../types'

const JournalStack = createNativeStackNavigator<JournalStackPramList>()

const scrnOptions: NativeStackNavigationOptions = { 
  headerStyle: {
    backgroundColor: '#6200EE',
  },
  headerTintColor: '#fff',
}

function JournalStackNavigator() {
  return (
    <JournalStack.Navigator screenOptions={scrnOptions}>
        <JournalStack.Screen name="Journal" component={Journal} />
        <JournalStack.Screen
          name='JournalEntry'
          component={JournalEntry}
          options={{
            headerShown: false,
          }}
        />
    </JournalStack.Navigator>
)}

export default JournalStackNavigator