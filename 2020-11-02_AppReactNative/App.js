import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const axios = require("axios");

export default class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {consultado:false};
  }

  handlerBtn(){
    var ip = this.state.ip;
    axios.get("http://ipwhois.app/json/"+ip)
    //axios.get("http://ipwhois.app/json/190.192.142.146")
    .then( (res)=>{
      this.setState(()=>{ return {consultado:true, data: res.data}});
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  handlerIP(text){
    this.setState({ ip: text});
  }

  render(){

    var datosIP;
    //Si está en true el resultado, agrega el Text con el parseo de los datos obtenidos
    if(this.state.consultado){
      datosIP = (
          <Text style={{ marginTop:20}}>La ip buscada es: {this.state.data.ip} y está localizada en {this.state.data.country}, {this.state.data.region}, {this.state.data.city}</Text>
      );
    }else{
      //Si no, agrega un div vacío
      datosIP = (<Text></Text>);
    }



    //JSX Retornado
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:200, marginBottom:10}}
          onChangeText={text => this.handlerIP(text)}
        />
        <Button
          style={{ marginBottom:100}}
          onPress={this.handlerBtn.bind(this)}
          title="Consultar IP"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {datosIP}
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
