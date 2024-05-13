import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { ReactSVG } from 'react-svg';
import logo from "../imgs/Group 1.svg";
import './style.css';
import Headerhome from '../componentes/home/footerhome';
import LoginForm from '../componentes/formLogin/formLogin';
import pmesp from '../assets/333326.svg'


function Home() {
  return (
    <>
      <Headerhome/>
      <div className="logo-container">
        <ReactSVG src={pmesp} />
      </div>
      <LoginForm/>
    </>
  );
}

export default Home;