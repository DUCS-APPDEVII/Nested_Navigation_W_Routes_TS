import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { JournalStackPramList } from "../types"

type JournalScreenProp = NavigationProp<JournalStackPramList,'JournalEntry'>

type journal = {
  jid: number,
  title: string
}
type journalListType = [journal]

type JournalButtonProps = {
    jid: number, 
    title: string, 
    navigation: JournalScreenProp
}

export default function JournalButton(props:JournalButtonProps) {
    const { jid, title, navigation} = props
    const onPress = () => {
        navigation.navigate('JournalEntry', {jid: jid})
    }
    return (
        <Pressable style={styles.button} onPress={onPress}>
           <Text style={styles.text}>{`title`}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#6200EE',
    },
    text: {
        color: '#03DAC6',
    }
})