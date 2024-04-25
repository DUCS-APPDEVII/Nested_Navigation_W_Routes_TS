import { View, Text, StyleSheet } from "react-native"
import { NavigationProp } from '@react-navigation/native'
import { JournalStackPramList } from "../types"
import JournalButton from "../components/journalButton"

type JournalScreenProp = NavigationProp<JournalStackPramList,'JournalEntry'>

type journal = {
  jid: number,
  title: string
}

const JournalEntry = ({navigation}:{navigation: JournalScreenProp}) => {
  
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Journal Entry</Text>
        <Text style={styles.textStyle}>Journal Entry JID: {jid}</Text>
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
    textStyle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    }
  });

export default JournalEntry