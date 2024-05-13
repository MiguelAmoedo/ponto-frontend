// services/PontoService.js
import axios from "axios";

const apiUrl = "localhost:5000";

const PontoService = {
  abrirPonto: async (id) => {
    const ponto = await axios.post(`http://${apiUrl}/ponto/iniciar/` + id);
    return await ponto;
  },
  getPontoId: async (id) => {
    const ponto = await axios.get(`http://${apiUrl}/ponto/${id}`);
    return ponto;
  },
  getLastDataId: async (id) => {
    const ponto = await axios.get(`http://${apiUrl}/ponto/data/${id}`);
    return ponto;
  },
  getLastPontoId: async (id) => {
    const ponto = await axios.get(`http://${apiUrl}/ponto//lastponto/${id}`);
    return ponto;
  },
  fecharPonto: async (id) => {
    const ponto = await axios.post(`http://${apiUrl}/ponto/fechar/` + id);
    return await ponto;
  },
  calcularHorasUltimos24Horas: async (id) => {
    const ponto = await axios.get(`http://${apiUrl}/ponto/24ptr/` + id);
    return await ponto;
  },
  calcularHorasUltimas72Horas: async (id) => {
    const ponto = await axios.get(`http://${apiUrl}/ponto/72ptr/` + id);
    return await ponto;
  },
  calcularHorasUltimas168Horas: async (id) => {
    const ponto = await axios.get(`http://${apiUrl}/ponto/168ptr/` + id);
    return await ponto;
  },
  checarEntradaServicoHoje: async (id) => {
    const ponto = await axios.get(`http://${apiUrl}/ponto/checar-servico/` + id);
    return await ponto;
  },
  dashBoardPonto: async (id) => {
    const ponto = await axios.get(`http://${apiUrl}/ponto/dashboardGeral/` + id);
    return await ponto;
  },

};

export default PontoService;
