import React from "react";
import {ContactoContext} from "./../Context/ContactoProvider";

function AgregarAmigo(params){

    let {setModal} = React.useContext(ContactoContext);
    const abreModal=()=>{
        setModal(true);
    }
    return(
        <button onClick={abreModal}>+Amigo</button>
    )
}

export default AgregarAmigo;