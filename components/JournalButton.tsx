import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { JournalButtonProps } from "../types"

export default function JournalButton(props:JournalButtonProps) {
    const { jid, title, navigation} = props
    const onPress = () => {
        navigation.navigate('JournalEntry', {jid: jid})
    }
    return (
        <Pressable style={styles.button} onPress={onPress} >
           <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#6200EE',
      width: '90%',
      marginTop: 2,
      marginBottom: 2,
      padding: 10
    },
    text: {
        color: '#03DAC6',
        fontSize: 24,
        textAlign: 'center'
    }
})