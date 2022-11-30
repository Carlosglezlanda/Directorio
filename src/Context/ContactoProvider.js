import React from "react";

const ContactoContext=React.createContext();
function ContactoProvider(props){

let contactos=[];

if(!localStorage.contactos)
{
  localStorage.setItem("contactos",JSON.stringify([]))
  contactos=[];
}
else{
  contactos=JSON.parse(localStorage.contactos);
}

let [contactosList,setContactosList]=React.useState(contactos);
let [valorBusqueda,setValorBusqueda]=React.useState("");
let [modal,setModal]=React.useState(false);

let cantidadAmigos=contactosList.length;
let contactosFiltro;

function borrarAmigo(telefono){
  const indice=contactos.findIndex(contacto=>contacto.telefono==telefono);
  let contactosTemporal=[...contactos];
  contactosTemporal.splice(indice,1);
  localStorage.setItem("contactos",JSON.stringify(contactosTemporal));
  setContactosList(contactosTemporal);
}

function AgregarAmigo(amigo){
  let contactosTemporal=[...contactos];
  contactosTemporal.push(amigo);
  localStorage.setItem("contactos",JSON.stringify(contactosTemporal));
  setContactosList(contactosTemporal);
}

if(valorBusqueda.length>0)
{
  let textoBusqueda=valorBusqueda.toLowerCase();
  contactosFiltro=contactos.filter((contacto)=>{
      let nombre=contacto.nombre.toLowerCase();
      if(nombre.includes(textoBusqueda))
          return contacto;
  });
}
else
{
  contactosFiltro=contactosList
}

return(
        <ContactoContext.Provider value={{
            cantidadAmigos,
            valorBusqueda,
            setValorBusqueda,
            contactosFiltro,
            borrarAmigo,
            modal,
            setModal,
            AgregarAmigo
        }}>
            {props.children}
        </ContactoContext.Provider>
    );
}

export {ContactoContext, ContactoProvider};