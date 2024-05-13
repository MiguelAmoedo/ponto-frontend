import React from "react";
import FuncionarioCard from "../componentes/index/nome";
import HeaderHome from "../componentes/home/footerhome";
import TabelaPatrulha from "../componentes/index/tabela";
import Abrir from "../componentes/index/abrirEFecharponto";
import Patrulha from "../componentes/index/tabela";
import { useParams } from 'react-router-dom';
function Index() {

  const { id } = useParams();
    return (
        <>
        <HeaderHome/>

     <FuncionarioCard id={id}/>
     <div  style={{with: '10rem' , height: '10rem'}}>
     <Abrir id={id}/>
     </div>
     <Patrulha  id={id}/>
   

     </>
     
    );
  }
  
  export default Index;
  