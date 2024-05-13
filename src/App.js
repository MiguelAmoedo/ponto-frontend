import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './paginas/home';
import Dashboard from './paginas/dashboard';
import Index from './paginas';
import HierarquiaPrincipal from './paginas/hierarquiapage';
import CadastrarCliente from './paginas/cadastrarCliente';
import Teste from './paginas/teste';

var id = ""
function App() {
  return (
    


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/index/:id" element={<Index/>} />
          <Route path="/hierarquia" element={<HierarquiaPrincipal/>} />
          <Route path="/cadastro-pm" element={<CadastrarCliente/>} />
          <Route path="/teste" element={<Teste/>} />
        </Routes>
      </BrowserRouter>    



  );
}

export default App;
