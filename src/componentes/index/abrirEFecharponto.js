import React, { useState, useEffect } from 'react';
import Ponto from '../../services/pontoServices';

const Abrir = () => {
  const [aberto, setAberto] = useState(false);
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    let interval;
    if (aberto) {
      interval = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
    } else {
      setTempo(0);
    }

    return () => clearInterval(interval);
  }, [aberto]);

  const alternarStatus = () => {
    if (!aberto) {
      Ponto.abrirPonto('6626d4c330833a4b7b8342c3')
        .then(() => {
          setAberto(true);
        })
        .catch((error) => {
          console.error('Erro ao abrir ponto:', error);
        });
    } else {
      Ponto.fecharPonto('6626d4c330833a4b7b8342c3')
        .then(() => {
          setAberto(false);
          setTempo(0);
        })
        .catch((error) => {
          console.error('Erro ao fechar ponto:', error);
        });
    }
  };

  const resetarTempo = () => {
    setTempo(0);
  };

  return (
    <div style={{ display: 'flex' ,  paddingRight: '4rem', padding: '2rem' }}>
      <div>
        <button
          style={{
            backgroundColor: aberto ? '#808080' : '#32CD32',
            color: '#fff',
            padding: '10px 20px',
            marginRight: '10px',
          }}
          onClick={alternarStatus}
        >
          {aberto ? 'Fechar' : 'Abrir'}
        </button>
        <button
          style={{ backgroundColor: '#808080', color: '#fff', padding: '10px 20px', marginRight: '10px' }}
        >
          {aberto
            ? `${Math.floor(tempo / 3600).toString().padStart(2, '0')}:${Math.floor((tempo % 3600) / 60)
                .toString()
                .padStart(2, '0')}:${(tempo % 60).toString().padStart(2, '0')}`
            : '00:00:00'}
        </button>
        <button style={{ backgroundColor: 'red', color: '#fff', padding: '10px 20px' }} type="button">
          Exonerar
        </button>
      </div>
    </div>
  );
};

export default Abrir;
