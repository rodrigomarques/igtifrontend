import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CadastroContato from './pages/CadastroContato';
import ListarContato from './pages/ListarContato';
import Home from './pages/Home';

import Header from './components/Header';
import axios from 'axios';

function App() {

  async function salvar(contato){
    axios.defaults.headers.post['Content-Type'] ='application/json';
    if(contato.id === undefined){
      await axios.post(`http://localhost:3001/contatos`,  contato )
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Contato salvo com sucesso");
      })
      .catch((err) => {
        console.log(err);
      })
    }else{
      await axios.patch(`http://localhost:3001/contatos/${contato.id}`,  contato )
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Contato salvo com sucesso");
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  async function listar(){
    let dados = [];
    await axios.get(`http://localhost:3001/contatos`)
      .then(res => {
        console.log(res.data);
        dados = res.data;
        
      })
      .catch((err) => {
        console.log(err);
      });

      console.log("DAODS:" + dados);
      return dados;
  }

  async function excluir(id){
    await axios.delete(`http://localhost:3001/contatos/${id}`)
      .catch((err) => {
        console.log(err);
      });
  }

  async function buscaContato(id){
    let dados = null;
    await axios.get(`http://localhost:3001/contatos/${id}`)
      .then((res) => {
        dados = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

      return dados;
  }

  async function editar(id){
    location.href=`/${id}/cadastrar`
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
          <Router>
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/listar">
                    <ListarContato atualizar={listar} excluir={excluir} editar={editar} />
                  </Route>
                <Route path="/cadastrar">
                  <CadastroContato salvar={salvar} />
                </Route>
                <Route path="/:id/cadastrar">
                  <CadastroContato salvar={salvar} buscaContato={buscaContato} />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
