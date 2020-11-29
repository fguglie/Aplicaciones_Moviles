import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerDefaultNavigator} from './Navigators/DrawerDefaultNavigator';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';
import LoginScreen from './Screens/LoginScreen';

import Home from "./Screens/Home";
import {ConsultarIP} from "./Screens/ConsultarIP";
import {DrawerContentScreen} from "./Screens/DrawerContentScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {isLoggedIn:false}
  }

  setLogin(){
    this.setState({isLoggedIn:true});
  }

  setLogout(){
    this.setState({isLoggedIn:false});
  }
    
  render(){
    let screen;
    if(!this.state.isLoggedIn){
      screen = <LoginScreen onLogin={()=> this.setLogin()}/>
    }else{
      screen =
      <NavigationContainer>
        {/* <DrawerDefaultNavigator /> */}
        <Drawer.Navigator 
          initialRouteName="Home"
          drawerContent={props => <DrawerContentScreen {...props} onLogout={() =>this.setLogout()}/> }
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Consultar IP" component={ConsultarIP} />
        </Drawer.Navigator>
      </NavigationContainer>
    }
    return (screen);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
