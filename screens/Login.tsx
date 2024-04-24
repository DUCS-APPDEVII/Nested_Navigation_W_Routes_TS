import { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { NativeStackProps } from '../types'

function Login( { route, navigation }: NativeStackProps ) {
  const [name, onChangeName ] = useState('')
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Login Screen</Text>
        <TextInput 
          style={styles.textStyle}
          onChangeText={onChangeName}
          value={name}
          placeholder='last name, first name'
        />
        <Button title="Sign In" onPress={() => navigation.navigate("CurWeatherNavigator", 
          {name: name}
        )} />
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
  })

export default Login