import { View, Text, StyleSheet } from "react-native"
import JournalButton from '../components/JournalButton'
import { JournalStackProps } from "../types"

const JournalEntries = [
  {jid: 123, title: 'Journal Entry 1'},
  {jid: 234, title: 'Journal Entry 2'},
  {jid: 345, title: 'Journal Entry 3'}
]

const Journal = ({navigation}: JournalStackProps) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Journal Entries</Text>
       {JournalEntries.map( (journal) => {
          return (
            <JournalButton jid={journal.jid} title={journal.title} navigation={navigation} key={journal.jid}/>
          )
       })}
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

export default Journal