import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClienteServices from '../../services/clientes';
import './LoginForm.css';

const LoginForm = () => {
    const [loginData, setLoginData] = useState({ cpf: '', senha: '' });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await ClienteServices.loginCliente(loginData);
            if (response.status === 200) {
                const id = response.data._id;
                navigate(`/index/${id}`);
            } else {
                alert("Usuário ou senha incorretos");
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert("Erro ao fazer login");
        }
    };
    return (
        <div className="login-container">
            <h2>Conexão SA | Sistema de ponto PMESP </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={loginData.cpf}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        value={loginData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div id='submit-button' className="form-group">                 
                    <button type="submit">Entrar</button>                
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
