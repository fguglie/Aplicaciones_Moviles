import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';

const axios = require("axios");

export default class Home extends Component {
// export default class App extends Component{

  //Constructor donde seteamos el estado de consultado en False, para que no muestre la info de retorno de la api
  constructor(props){
    super(props);
    this.state = {consultado:false};
  }

  //Método para consultar mi IP
  consultarMiIP(){
    axios.get("https://api.myip.com/")
    .then((res)=>{
      this.setState({consultado:true, data: res.data.ip});
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  componentDidMount(){
    this.consultarMiIP();
  }

  //Render
  render(){
    var datosIP;
    //Si está en true el resultado, agrega el Text con el parseo de los datos obtenidos
    if(this.state.consultado){
      datosIP = (
          <Text>SU IP ES: {this.state.data}</Text>
      );
    }else{
      //Si no, agrega un div vacío
      datosIP = (<Text>No se pudo encontrar la IP</Text>);
    }
    //JSX Retornado
    return (
      <View style={styles.container}>
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
