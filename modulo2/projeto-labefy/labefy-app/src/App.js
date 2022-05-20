import React from "react";

export default class App extends React.Component {
  state = {
    namePlaylist: ""
  }

  envia = (event) => {
    this.setState({namePlaylist: event.target.value})
  }
  
  state = {
    onclick: false 
  }

  abrelista = (event) => {
    this.setState({onclick: event.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <button className="CriarPL">
          <h3> + Playlist </h3>
          <input value={this.state.namePlaylist} onChange={this.envia} ></input>
        </button>
        
        <form>(Escreva o nome da Playlist)</form>
        
        <button value={this.state.onclick} onClick={this.abrelista} className="vejaPlaylisy">
          <h3> Todas as Playlists </h3>
        </button>
        
      </div>
    );
  }
}

