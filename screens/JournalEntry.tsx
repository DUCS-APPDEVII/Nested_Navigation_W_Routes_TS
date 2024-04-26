import { View, Text, StyleSheet } from "react-native"
import { JournalScreenProp } from "../types"

const JournalEntry = ({route}:{route: JournalScreenProp}) => {
  const { jid } = route.params
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