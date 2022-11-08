import React from "react";
import {ContactoContext} from "./../Context/ContactoProvider";

function AgregarAmigo(params){
    const abreModal=()=>{
        console.log("Si jalo el click");
    }
    return(
        <button onClick={miFuncion}>+Amigo</button>
    )
}

export default AgregarAmigo;