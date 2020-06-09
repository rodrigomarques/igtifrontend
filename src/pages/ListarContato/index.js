import React, { useState, useEffect } from 'react';

function ListarLivro({ atualizar, editar, excluir }) {

  const [lista, setLista] = useState([]);
  useEffect(() => {
    async function load(){
      let dados = await atualizar();
      setLista(dados);
    }

    load();
  }, []);

  function handleEditar(id){
    editar(id);
  }

  async function handleExcluir(id){
    await excluir(id);
    let dados = await atualizar();
    setLista(dados);    
    alert("Contato Excluído com sucesso")
  }

  return (
    <div>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Ação</th>
            </tr>
            </thead>
            <tbody>
            { lista.map(( v, i ) => { return (
                <tr key={i}>
                    <td>{ v.nome }</td>
                    <td>{ v.email }</td>
                    <td>{ v.telefone }</td>
                    <td>{ v.endereco }</td>
                    <td>
                    <button className="btn btn-warning" onClick={ () => handleEditar(v.id) }>Editar</button> 
                    <button className="btn btn-danger" onClick={ () => handleExcluir(v.id) }>Excluir</button>
                    </td>
                </tr>
            ) })}
            </tbody>
        </table>
    </div>
  );
}

export default ListarLivro;
