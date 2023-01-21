import React, { Component } from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native'

export default class DrawerMenu extends Component {
  navigateToScreen=(route)=>()=> {
    this.props.navigation.navigate(route)
  };


  render() {
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity 
          style={styles.menuItem} 
          onPress={this.navigateToScreen('Feed')}>
              <Image
            source={require('../../assets/favicon.png')}
            style={[styles.iconStyle]}
          />
            <Text style={styles.menuText}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}
          onPress={this.navigateToScreen('Article')}>
            <Text style={styles.menuText}>Article</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}
          onPress={this.navigateToScreen('Contacts')}>
            <Text style={styles.menuText}>Contact</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footer}>
        <Text style={styles.footerText}> Drawer Menu </Text>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f1f1f1',
    paddingVertical:40
  },
  footer:{
    position:'absolute',
    left:0,
    bottom:0,
    width:'100%',
    paddingVertical:10
  },
  footerText:{
    textAlign:'center',
    color:'#999',
    fontSize:11
  },
  menuItem:{
    backgroundColor:'#acc',
    padding:10,
    margin:10,
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
    
  },
  menuText:{
    fontSize:13,
    color:'#333',
    margin:5

  },
  iconStyle:{
    height:24,
    margin:5,
    width:24,
  }
});