import React, { useState } from 'react';
import ClienteServices from '../../services/clientes';
import './Formulario.css';

const Formulario = () => {
    const [dados, setDados] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        postoGraduacao: 'Soldado 2ª Classe',
        organizacao: 'Polícia Militar',
        quadro: 'QPPM',
        guarnicao: 'Radio Patrulha',
        telefone: '',
        senha: '',
        status: true
    });
console.log(dados)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDados({ ...dados, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await ClienteServices.postCliente(dados);
            alert('Policial cadastrado com sucesso!');
            window.location.reload();
        } catch (error) {
            console.error('Erro ao cadastrar policial:', error);
            alert('Erro ao cadastrar policial!');
        }
    };

    const handleAccess = () => {
        const accessPassword = prompt('Digite a senha para acessar a página:');
        if (accessPassword !== 'rh2024') {
            alert('Senha incorreta. Acesso negado!');
            window.location.reload();
        }
    };

    // Verifica a senha ao acessar a página
    window.onload = handleAccess;

    return (
        <div className="formulario-container">
            <h2>Cadastrar Policial</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={dados.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input
                        type="text"
                        id="sobrenome"
                        name="sobrenome"
                        value={dados.sobrenome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={dados.cpf}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postoGraduacao">Posto/Graduação:</label>
                    <select
                        id="postoGraduacao"
                        name="postoGraduacao"
                        value={dados.postoGraduacao}
                        onChange={handleChange}
                        required
                    >
                        <option value="Soldado 2ª Classe">Soldado 2ª Classe</option>
                        {['Coronel', 'Tenente Coronel', 'Major', 'Capitão', '1º Tenente', '2º Tenente', 'Aspirante a Oficial', 'Aluno-Oficial', 'Sub Tenente', '1º Sargento', '2º Sargento', '3º Sargento', 'Cabo', 'Soldado 1ª Classe', 'Soldado 2ª Classe'].map((posto, index) => (
                            <option key={index} value={posto}>{posto}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="organizacao">Organização:</label>
                    <select
                        id="organizacao"
                        name="organizacao"
                        value={dados.organizacao}
                        onChange={handleChange}
                        required
                    >
                        <option value="Polícia Militar">Polícia Militar</option>
                        {['Polícia Militar', 'Polícia Civil', 'Polícia Federal', 'Guarda Municipal'].map((org, index) => (
                            <option key={index} value={org}>{org}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="quadro">Quadro:</label>
                    <select
                        id="quadro"
                        name="quadro"
                        value={dados.quadro}
                        onChange={handleChange}
                        required
                    >
                        <option value="QPPM">QPPM</option>
                        {['QPPM', 'QPES', 'QOPM'].map((quadro, index) => (
                            <option key={index} value={quadro}>{quadro}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="guarnicao">Guarnição:</label>
                    <select
                        id="guarnicao"
                        name="guarnicao"
                        value={dados.guarnicao}
                        onChange={handleChange}
                        required
                    >
                        <option value="Radio Patrulha">Radio Patrulha</option>
                        {['Radio Patrulha', 'Força Tática', 'ROTA', 'BAEP', 'CavPM', 'BPRv', '2° BPChq'].map((guarnicao, index) => (
                            <option key={index} value={guarnicao}>{guarnicao}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={dados.telefone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Senha RH:</label>
                    <input
                        type="text"
                        id="senha"
                        name="senha"
                        value={dados.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Formulario;
