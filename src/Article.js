import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default function Article () {

    return (
        <View style={styles.container}>
            <Text> Article Screen </Text>
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});