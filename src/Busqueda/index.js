import React from "react";
import "./Busqueda.css";
import {ContactoContext} from "./../Context/ContactoProvider";

function Busqueda(props){

    let {ValorBusqueda,setValorBusqueda}=React.useContext(ContactoContext);
    function actualizaTexto(event)
    {
        console.log(event.target.value);
        setValorBusqueda(event.target.value);
    }

    return(
        <div className="contenedor">
            <input className="barra" onChange={actualizaTexto} value={ValorBusqueda}></input>
        </div>
    );
}

export default Busqueda;