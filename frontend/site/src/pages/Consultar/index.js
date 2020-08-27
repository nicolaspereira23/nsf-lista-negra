import React, { useState } from 'react';

import ListaNegraApi from '../../services/listanegraApi';



const api = new ListaNegraApi();


export default function Consultar() {

    const [registros, setRegistro] = useState([])

      const consultarClick = async () => {
        const lns = await  api.consultar()
        setRegistro([... lns])
      }

    return (
    <div>     
        <h1>Consultar na Lista Negra</h1>

        <div>
            <button onClick={consultarClick}> Consultar </button>
        </div>
        

        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Motivo</th>
                        <th>Inclusão</th>
                    </tr>
                </thead>

                <tbody>
                  {registros.map(item =>      
                    <tr key={item.id}> 
                       <th>#{item.id}</th>
                       <td>{item.nome}</td>
                       <td>{item.motivo}</td>
                       <td>{new Date(item.inclusao + 'z').toLocaleString() }</td>
                    </tr>
                    )}

                </tbody>
            </table>
        </div>
    </div>
    )
}