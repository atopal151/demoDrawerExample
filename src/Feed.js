import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default function Feed () {

    return (
        <View style={styles.container}>
            <Text> Feed Screen </Text>
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