import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import ClienteServices from '../../services/clientes';
import PontoService from '../../services/pontoServices';

const Patrulha = ({ id }) => {
  const [policial, setPolicial] = useState(null);
  const [ponto, setPonto] = useState([]);
  const [dataponto, setDataPonto] = useState([]);
  const [ultimoPonto, setUltimoPonto] = useState([]);
  const [horaEntrada, setHoraEntrada] = useState('');
  const [horaSaidaESaida, setHoraSaidaESaida] = useState('');
  const [horasUltimas24, setHorasUltimas24] = useState('');
  const [horasUltimas72, setHorasUltimas72] = useState('');
  const [horasUltimas168, setHorasUltimas168] = useState('');

  useEffect(() => {
    async function fetchPolicial() {
      try {
        const response = await ClienteServices.getByIdCliente(id);
        setPolicial(response.data);
      } catch (error) {
        console.error('Erro ao buscar getByIdCliente: ', error);
      }
    }
    fetchPolicial();
  }, [id]);

  useEffect(() => {
    async function fetchPolicial() {
      try {
        const response = await PontoService.getPontoId(id);
        // Encontrar o objeto com a data mais atual
        const objetoMaisAtual = response.data.reduce((objetoAtual, proximoObjeto) => {
          return new Date(proximoObjeto.data) > new Date(objetoAtual.data) ? proximoObjeto : objetoAtual;
        });
        setHoraSaidaESaida(objetoMaisAtual);
      } catch (error) {
        console.error('Erro ao buscar getByIdCliente: ', error);
      }
    }
    fetchPolicial();
  }, [id]);
  
  useEffect(() => {
    async function fetchPonto() {
      try {
        const response = await PontoService.dashBoardPonto(id);
        setUltimoPonto(response.data);
      } catch (error) {
        console.error('Erro ao buscar getPontoId:', error);
      }
    }
    fetchPonto();
  }, [id]);

  return (
    <>
      {policial && (
        <table className="tabela-patrulha">
          <thead>
            <tr>
              <th>Data</th>
              <th>Patrulhou</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Saldo</th>
              <th>Últimas 72 horas</th>
              <th>Últimas 168 horas</th>
            </tr>
          </thead>
          <tbody>
            {ultimoPonto && ultimoPonto.diasSeguintes.reverse().map((dia, index) => (
              <tr key={index}>
                <td>{dia}</td>
                <td>{index === 0 ? policial.patrolled ? 'S' : 'N' : ''}</td>
                <td>{index === 0 ? horaSaidaESaida.horaEntrada : ''}</td>
                <td>{index === 0 ? horaSaidaESaida.horaSaida : ''}</td>
                <td>{index === 0 ? ultimoPonto.saldo24Horas : ''}</td>
                <td>{index === 0 ? ultimoPonto.saldo72Horas : ''}</td>
                <td>{index === 0 ? ultimoPonto.saldo168Horas : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Patrulha;
