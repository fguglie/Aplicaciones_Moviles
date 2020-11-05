import React from "react";
import './App.css';

const axios = require('axios');

class App extends React.Component {

  //Constructor, donde seteo en False el estado para que no rompa
  constructor(props){
    super(props);
    this.state = {consultado:false};
  }
  
  //Handler del botón, es la acción del botón: Consulta a la api, setea en true el flag del resultado y almacena la data en state.data
  handlerBtn(){
    var ip = this.state.ip;
    axios.get("http://ipwhois.app/json/"+ip)
    .then( (res)=>{
      this.setState(()=>{ return {consultado:true, data: res.data}});
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  //Handler del input: Lee lo ingresado en el input
  handlerInput(event){
    this.setState({ ip: event.target.value});
  }

  //Render
  render(){
    var datosIP;
    //Si está en true el resultado, agrega el html con el parseo de los datos obtenidos
    if(this.state.consultado){
      datosIP = (
        <div>
            {"La ip buscada es: "+this.state.data.ip+" y está localizada en "+this.state.data.country+", "+this.state.data.region+", "+this.state.data.city}
        </div>
      );
    }else{
      //Si no, agrega un div vacío
      datosIP = (<div></div>);
    }

    //JSX Retornado
    return (
      <div className="App">
      <input onChange={this.handlerInput.bind(this)} type="text" placeholder="Ingrese IP" />
        <button onClick={this.handlerBtn.bind(this)}>
          Consultar IP
        </button>
          {datosIP}
      </div>
    );
  }
}

export default App;
