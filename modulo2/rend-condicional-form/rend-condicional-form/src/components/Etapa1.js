import React from 'react'
export default class Etapa1 extends React.Component {
    render () {
        return(
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <label>1. Qual o seu nome?</label>
                <input name='Nome'></input>
                <label>2. Qual sua idade?</label>
                <input name='idade'></input>
                <label>3. Qual seu email?</label>
                <imput name='email'></imput>
                <label>4. Qual a sua escolaridade</label>
                <select name="escolaridade">
                    <option value="ens. méd. incompleto">Ensino médio incompleto</option>
                    <option value="ens. méd. completo">Ensino médio completo</option>
                    <option value="ens. sup. incompleto">Ensino superior incompleto</option>
                    <option value="ens. sup. completo">Ensino superior</option>
                    </select>
            </div>
        )
    }
}