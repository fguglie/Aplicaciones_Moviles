import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const axios = require("axios");

export class InfoScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>This is the info screen</Text>
                <StatusBar style="auto" />
            </View>
        );
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