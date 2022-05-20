import React from 'react'
export default class Etapa3 extends React.Component {
    render () {
        return(
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <label>5. Porque você não terminou sua graduação?</label>
                <input name='graduação'></input>
                <labe>6. Você fez algum curso complementar?</labe>
                <select name="escolaridade">
                    <option value="nenhum">Nenhum</option>
                    <option value="curso técnico">Curso técnico</option>
                    <option value="curso de inglês">Curso de inglês</option>
                    </select>
            </div>
        )
    }
}