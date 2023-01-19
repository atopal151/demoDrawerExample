import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'

export default class Article extends Component {
  render() {
    const {navigation}=this.props;
    return (
        <View style={styles.container}>

        <Text> Article Screen </Text>
        <TouchableOpacity style={styles.btnStyle} onPress={() => { navigation.navigate('Feed') }}>
            <Text> Go To Feed Screen </Text>
        </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStyle: {
        margin:10,
        padding: 15,
        backgroundColor:'#acc',
        borderRadius:10
    }
});