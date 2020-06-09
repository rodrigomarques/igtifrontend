import React from 'react';
import {
    BrowserRouter as Router
  } from "react-router-dom";

function Header() {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand">AGENDA</a>
        <Router>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/cadastrar">Cadastrar Contato</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/listar">Listar Contato</a>
                </li>
            </ul>
        </div>
        </Router>
        </div>
    </nav>
  );
}

export default Header;
