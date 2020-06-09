import React, { useState, useEffect } from 'react';
import {

  useParams
} from "react-router-dom";
function CadastroContato({ salvar, buscaContato = () => {} }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  let { id } = useParams();
  
  useEffect(() => {
    if( id !== undefined){
      async function load(){
        let dados = await buscaContato(id);
        let valores = dados[0];

        setNome(valores.nome);
        setEmail(valores.email);
        setTelefone(valores.telefone);
        setEndereco(valores.endereco);
      }

      load();
    }
  }, []);

  function handleSubmit() {
    let contato = {
        'titulo' : nome,
        'email' : email,
        'telefone' : telefone,
        'endereco' : endereco,
        'id' : id
    };

    salvar(contato);
  }

  return (
    <fieldset className="border p-2">
        <legend className="w-auto">Agenda</legend>
        <div className="form-group">
            <label>Nome</label>
            <input type="text" className="form-control" name="nome" value={nome} onChange={ (e) => { setNome(e.target.value) }} />
        </div>
        <div className="form-group">
            <label>E-mail</label>
            <input type="text" className="form-control" value={email} onChange={ (e) => { setEmail(e.target.value) }} />
        </div>
        <div className="form-group">
            <label>Telefone</label>
            <input type="text" className="form-control" value={telefone} onChange={ (e) => { setTelefone(e.target.value) }} />
        </div>
        <div className="form-group">
            <label>Endereço</label>
            <input type="text" className="form-control" value={endereco} onChange={ (e) => { setEndereco(e.target.value) }} />
        </div>
        <button className="btn btn-primary" onClick={ handleSubmit }>Salvar</button>
    </fieldset>
  );
}

export default CadastroContato;
