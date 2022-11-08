import React from "react";
import Contacto from "../Contacto";

function Lista(props){

    return(
        <React.Fragment>
            <h1>Lista</h1>
            {props.children}
        </React.Fragment>
    );
}

export default Lista;