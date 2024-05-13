import axios from "axios";

const apiUrl = "localhost:5000";

console.log(apiUrl)
var ClienteServices = {
  getCliente: async (id) => {
    const cliente = axios.get(`http://${apiUrl}/cliente/`);
    return await cliente;
  },
  getByIdCliente: async (id) => {
    const cliente = axios.get(`http://${apiUrl}/cliente/` + id);
    return await cliente;
  },
  postCliente: async (dados) => {
    const cliente = axios.post(`http://${apiUrl}/cliente/`,dados);
    return await cliente;
  },
  loginCliente: async (dados) => {
    const cliente = axios.post(`http://${apiUrl}/cliente/login`,dados);
    return await cliente;
  },

};

export default ClienteServices;
