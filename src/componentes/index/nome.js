import React from 'react';

const FuncionarioCard = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px',   borderBottom: '1px solid gray' }}>
        <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTKyEAfcjCoNMj4FLAXuwNiWXzOrbSba00AlTXlKOK69nkSTLRD639ODMH99Rr7MLwb9UelGo0wgk-DtDnazbHnWpCSY0BQM4m2M1gaVrY' style={{ width: '4rem' , padding:'2rem' , paddingRight: '1rem' }}></img>
        <div>
          <p>Soldado Carl Jonhson | CPF: 45</p>
          <p>Rádio Patrulha | PMESP</p>
         
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'flex-end' , paddingRight: "3rem"}}>
          <div style={{ display: 'flex' }}>
            <div style={{ backgroundColor: 'black', width: '5rem', height: '3rem' }}>
              <p style={{ color: 'white', textAlign: 'center', alignItems: 'center' }}>Ativo</p>
            </div>
            <div style={{ padding: '10px' }}></div>
            <div style={{ backgroundColor: 'black', width: '6rem', height: '3rem' }}>
              <p style={{ color: 'white', textAlign: 'center', alignItems: 'center' }}>Em serviço</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuncionarioCard;
