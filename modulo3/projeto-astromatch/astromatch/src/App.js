import React from 'react';
import './App.css';
import paginaPerfis from './pages/paginaPerfis'
import { useEffect, useState } from 'react';
import paginaMatches from './pages/paginaMatches';

export default function App () {


  const [pagina, setPagina] = useState("")

  useEffect(() => {
    rederizaPagina();
  }, []) 

  function rederizaPagina() {
    switch (pagina) {
      case "paginaPerfis":
        return <paginaPerfis />;
      case "paginaMatches":
        return <paginaMatches />;
    }
  }
  
  const trocaPaginaPerfil = () => {
    setPagina("paginaPerfis")
  }

  const trocaPaginaMatches = () => {
    setPagina("paginaMatches")
  }

  return (
    <div>
    <header>
    <h2>AstroMatch 💕</h2>
    <button type='Perfis' onClick={rederizaPagina} >ir para perfis</button>
    <hr color='red'></hr>
    <h3>Matches</h3>
    </header>
    pagina = {pagina}
    trocaPaginaPerfil = {trocaginaPerfil}
    trocaPaginaMatches = {trocaPaginaMatches}
    </div>
  );
}
 


