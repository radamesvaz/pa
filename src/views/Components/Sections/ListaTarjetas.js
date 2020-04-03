import React from 'react';
import Tarjeta from './Tarjeta';

const ListaTarjetas = ({ accesorios }) => {

    return(
        <div className="tc">
         {
        accesorios.map((user, i) => {
        return  (
        <Tarjeta style={{marginLeft: '5px'}}
        key={i} 
        id={accesorios[i].id} 
        nombre={accesorios[i].name} 
        link={accesorios[i].link}

        
        /*precio={equipos[i].precio}
        disponibilidad={equipos[i].disponibilidad}*/
        /> 
        );
    })
         }
        </div> 
    );
}

export default ListaTarjetas;