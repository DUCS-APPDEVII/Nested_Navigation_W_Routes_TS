import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Journal from "../screens/Journal";
import JournalEntry from '../screens/JournalEntry'
import { JournalStackPramList } from '../types'

const JournalStack = createNativeStackNavigator<JournalStackPramList>()

function JournalStackNavigator() {
    <JournalStack.Navigator>
        <JournalStack.Screen name="Journal" component={Journal} />
        <JournalStack.Screen
          name='JournalEntry'
          component={JournalEntry}
          options={{
            headerShown: false,
          }}
        />
    </JournalStack.Navigator>

}

export default JournalStackNavigator