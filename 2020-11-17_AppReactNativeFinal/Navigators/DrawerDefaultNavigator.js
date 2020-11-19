
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import Home from "../Screens/Home";
import {ConsultarIP} from "../Screens/ConsultarIP";

const Drawer = createDrawerNavigator();

export class DrawerDefaultNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Consultar IP" component={ConsultarIP} />
            </Drawer.Navigator>
        );
    }
    
}