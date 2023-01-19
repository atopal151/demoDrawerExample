import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import Article from './src/Article';
import React, { Component } from 'react';
import Feed from './src/Feed';
import { NavigationContainer } from '@react-navigation/native';
import Contacts from './src/Contacts';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerButton from './src/component/DrawerButton';

const Drawer = createDrawerNavigator();

function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Feed'
        screenOptions={{
          drawerPosition: 'left',
          drawerActiveTintColor:'green',
          drawerInactiveTintColor:'black',
          drawerStyle:{width:160}
        }}>

        <Drawer.Screen 
        name="Feed" 
        component={Feed} 
        options={{drawerLabel:'Feed Page', drawerIcon:()=>(
          <Icon name='md-walk'/>)}} />
        
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

export default App;