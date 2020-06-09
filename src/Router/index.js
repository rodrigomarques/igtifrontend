import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import CadastroContato from './../pages/CadastroContato';
  import ListarContato from './../pages/ListarContato';
  import Home from './../pages/Home';

  
export default function Rota() {
    return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/listar" component={ListarContato} />
            <Route path="/cadastrar" component={CadastroContato} />
            <Route path="/:id/cadastrar" component={CadastroContato} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    );
  }