import React from "react";
import "./Contacto.css";

function Contacto(props){
    
    function miFuncion(){
        props.borrarAmigo();
    }

    return(
        <React.Fragment>
            <div className="listaContacto">
                <h2 className="nombreContacto">{props.nombre}</h2>
                <p className="infoContacto">
                    {props.telefono} - {props.correo}
                </p>
                <button onClick={miFuncion}>Eliminar</button>
            </div>
        </React.Fragment>
    )
}

export default Contacto;