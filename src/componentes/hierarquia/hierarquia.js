import React, { useState, useEffect } from 'react';
import ClienteServices from '../../services/clientes';
import './Patentes.css'; 

const Patentes = () => {
  const [policiais, setPoliciais] = useState([]);

  useEffect(() => {
    async function fetchPoliciais() {
      try {
        const response = await ClienteServices.getCliente();
        const sortedPoliciais = response.data.sort((a, b) => new Date(a.dataCadastro) - new Date(b.dataCadastro));
        setPoliciais(sortedPoliciais);
      } catch (error) {
        console.error('Erro ao buscar policiais:', error);
      }
    }

    fetchPoliciais();
  }, []);

  // Ordenando os postoGraduacao
  const ordemPostoGraduacao = [
    'Coronel',
    'Tenente Coronel',
    'Major',
    'Capitão',
    '1º Tenente',
    '2º Tenente',
    'Aspirante a Oficial',
    'Aluno-Oficial',
    'Sub Tenente',
    '1º Sargento',
    '2º Sargento',
    '3º Sargento',
    'Cabo',
    'Soldado 1ª Classe',
    'Soldado 2ª Classe'
  ];

  const ordemInsignia = [
    '✵✵✵',
    '✵✵✧',
    '✵ ✧ ✧',
    '✧✧✧',
    '✧✧',
    '✧',
    '✯',
    '≛',
    '△',
    '❯❯ ❯❯❯',
    '❯ ❯❯❯',
    '❯❯❯',
    '❯❯',
    '❯',
    '⌂'
  ];

  // Agrupando policiais por postoGraduacao
  const groupedPoliciais = policiais.reduce((acc, policial) => {
    if (!acc[policial.postoGraduacao]) {
      acc[policial.postoGraduacao] = [];
    }
    acc[policial.postoGraduacao].push(policial);
    return acc;
  }, {});

  // Função para formatar a data no formato dd/mm/aaaa
  const formatarData = (data) => {
    const date = new Date(data);
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  return (
    <div  style={{paddingBottom: '10rem' , paddingLeft: '30rem'}}>
      {ordemPostoGraduacao.map(postoGraduacao => (
        <div key={postoGraduacao} style={{}}>
          {groupedPoliciais[postoGraduacao] && (
            <>
              <h2>{postoGraduacao}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Insignia</th>
                    <th>Cargo</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>CPF</th>
                    <th>Quadro</th>
                    <th>Organização</th>                 
                    <th>Guarnição</th>
                    <th>Telefone</th>
                    <th>Data de Cadastro</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedPoliciais[postoGraduacao].map(policial => (
                    <tr key={policial.cpf}>
                      <td>{ordemInsignia[ordemPostoGraduacao.indexOf(postoGraduacao)]}</td>
                      <td>{policial.postoGraduacao}</td>
                      <td>{policial.nome}</td>
                      <td>{policial.sobrenome}</td>
                      <td>{policial.cpf}</td>
                      <td>{policial.quadro}</td>
                      <td>{policial.organizacao}</td>
                      <td>{policial.guarnicao}</td>
                      <td>{policial.telefone}</td>
                      <td>{formatarData(policial.dataCadastro)}</td>
                      <td>{policial.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Patentes;
