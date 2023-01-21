import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import Article from './src/Article';
import React, { Component } from 'react';
import { Image ,StyleSheet} from 'react-native'
import Feed from './src/Feed';
import { NavigationContainer } from '@react-navigation/native';
import Contacts from './src/Contacts';
import DrawerMenu from './src/component/DrawerMenu';

const Drawer = createDrawerNavigator();

function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Feed'
      drawerContent={(props)=> <DrawerMenu {...props}/>}
        screenOptions={{
          drawerPosition: 'left',
          drawerActiveTintColor:'green',
          drawerInactiveTintColor:'black',
          drawerStyle:{width:250}
        }}>

        <Drawer.Screen 
        name="Feed" 
        component={Feed} 
        options={{drawerLabel:'Feed Page', 
        drawerIcon:() => (
          <Image
            source={require('./assets/favicon.png')}
            style={[styles.icon]}
          />
        ),}} />
        
        <Drawer.Screen 
        name="Article" 
        component={Article} 
        options={{drawerLabel:'Article Page'}} />
        
        <Drawer.Screen 
        name="Contacts" 
        component={Contacts}  
        options={{drawerLabel:'Contact Page'}} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default App;