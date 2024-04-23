import { View, Text, StyleSheet } from "react-native"

const Journal = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Journal Entries</Text>
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