import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { ReactSVG } from 'react-svg';
import logo from "../imgs/Group 1.svg";
import './style.css';
import Headerhome from '../componentes/home/footerhome';
import Patentes from '../componentes/hierarquia/hierarquia';
import pmesp from '../assets/333326.svg'
import FooterHome from '../componentes/footer/footerhome';
function HierarquiaPrincipal() {


    return (
        <div>
            <div>
                <Headerhome />
                <h1 style={{ textAlign: 'center' }}>
                    HIERARQUIA PMESP - CONEXÃO SA
                </h1>
                <a href='/cadastro-pm'>
                <p>
                    Cadastro
                </p>
            </a>
    
                <div style={{ textAlign: 'center' }}>
                    <ReactSVG src={pmesp} />
                </div>

                <img src=''></img>
                <div style={{ width: '40rem', height: '20rem' }}>
                    <Patentes />

                </div>

            </div>

        </div>

    );
}

export default HierarquiaPrincipal;
