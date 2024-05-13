import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { ReactSVG } from 'react-svg';
import logo from "../imgs/Group 1.svg";
import './style.css';
import Formulario from '../componentes/cadatrarSoldado/cadastro';
import Headerhome from '../componentes/home/footerhome';
function CadastrarCliente() {


    return (
        <>
            <Headerhome />
            <div style={{padding: '0.5rem'}}></div>
            <Formulario />
            <a href='/hierarquia'>
                <p>
                    Acesse a hierarquia
                </p>
            </a>
        </>
    );
}

export default CadastrarCliente;
