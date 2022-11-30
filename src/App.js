import './App.css';
import React from 'react';

import Busqueda from './Busqueda';
import Lista from './Lista';
import Contacto from './Contacto';
import AgregarAmigo from './AgregarAmigo';
import ModalAmigo from './ModalAmigo';
import {ContactoContext,ContactoProvider} from './Context/ContactoProvider';


function App() {

  /*let contactos=[
    {
        nombre:"Guillermo",
        telefono:"123456789",
        correo:"algo@gmail.com"
    },
    {
        nombre:"Josue",
        telefono:"12222222",
        correo:"josue@gmail.com"
    },
    {
        nombre:"Pablo",
        telefono:"4444444444",
        correo:"pablo@gmail.com"
    }
]*/

  return (
    <React.Fragment>
      <ContactoProvider>
        <ContactoContext.Consumer>
          {({
            cantidadAmigos,
            contactosFiltro,
            borrarAmigo,
            modal})=>(
            <React.Fragment>
              <div className='busqueda'>
                <h1>Mi lista de contactos</h1>
                <h3>Tengo {cantidadAmigos} amigos</h3>
              </div>
              <Busqueda/> 
              <AgregarAmigo/>
              <Lista>
                {
                  contactosFiltro.map((contacto)=>{
                    return (<Contacto
                      nombre={contacto.nombre}
                      telefono={contacto.telefono}
                      correo={contacto.correo}
                      borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>)
                  })
                }
              </Lista>
              {contactosFiltro.length===0 && <h1>No tienes amigos dT_Tb</h1>}
              {modal && <ModalAmigo/>}
            </React.Fragment>
          )}
        </ContactoContext.Consumer>
      </ContactoProvider>
    </React.Fragment>
  );
}

export default App;
