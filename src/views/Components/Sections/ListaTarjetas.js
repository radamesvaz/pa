import React from 'react';
import Tarjeta from './Tarjeta';

const ListaTarjetas = ({ equipos }) => {

    return(
        <div>
         {
        equipos.map((user, i) => {
        return  (
        <Tarjeta 
        key={i} 
        id={equipos[i].id} 
        nombre={equipos[i].nombre} 
        precio={equipos[i].precio}
        disponibilidad={equipos[i].disponibilidad}
        /> 
        );
    })
         }
        </div> 
    );
}

export default ListaTarjetas;