import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';


class App extends React.Component {
  state={
    etapa:1
  }
  etapaSeguinte = () =>{
    this.setState({etapa:this.state.etapa + 1})
  }

  renderizaEtapa = () =>{
    switch(this.state.etapa){
      case 1: 
      return<Etapa1 />;
      case 2:
        return<Etapa2 />;
      case 3: 
      return<Etapa3 />;
      case 4:
      return<EtapaFinal />;
      default: 
      return<EtapaFinal />;
    }
  }
  render(){

  return (
    <div className="App">
      {this.renderizaEtapa()}
      <button onClick={this.etapaSeguinte}>Proxima Etapa</button>
    </div>
  )
  };
}

export default App;
