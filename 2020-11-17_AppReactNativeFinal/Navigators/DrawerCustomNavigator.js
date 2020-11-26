
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import Home from "../Screens/Home";
import {ConsultarIP} from "../Screens/ConsultarIP";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props}/>}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Consultar IP" component={ConsultarIP} />
            </Drawer.Navigator>
        );
    }
    
}

