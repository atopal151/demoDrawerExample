import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'



export default class Contacts extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text> Contact Screen </Text>
                <TouchableOpacity style={styles.btnStyle} onPress={() => { navigation.openDrawer() }}>
                    <Text> Open Drawer </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={() => { navigation.closeDrawer() }}>
                    <Text> Close Drawer </Text>
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