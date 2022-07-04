import React from 'react';
import axios from 'axios'
import './App.css'

class App extends React.PureComponent {
  state = {
    cadastroDeUsuario: [],
    email: "",
    nome: "",
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangeNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  componentDidMount() {
    this.getCadastroDeUsuario()
  }

  getCadastroDeUsuario = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "tiago-castelo-aragon",
          }
        }
      )
      .then((response) => {
      this.setState({ cadastroDeUsuario: response.data })
    })
    .catch((error) ={
    alert(error.message)
    })
  }

  createCadastroUsuario = () => {
    axios
    .get(
      ""
    )
  }

  render(){
    return(
      <div className = "App" >
      <button>"mudar pagina"</button>
      </div>
    );
}

export default App;
