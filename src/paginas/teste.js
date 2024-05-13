import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Patrulha from '../componentes/index/tabela';
import { useNavigate } from 'react-router-dom';


const Pagina = () => {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleRedirect = () => {
    navigate(`/index/${id}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <input
        type="text"
        placeholder="Digite o ID"
        value={id}
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '1rem', marginBottom: '20px' }}
      />
      <button onClick={handleRedirect} style={{ padding: '10px 20px', fontSize: '1rem' }}>Ir para Patrulha</button>
      <Link to="/index/${id}" style={{ marginTop: '20px', fontSize: '1rem', color: 'blue' }}>Ir para Hierarquia</Link>
    </div>
  );
};

export default Pagina;
