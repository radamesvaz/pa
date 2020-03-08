import React from 'react';

const Tarjeta = ({ nombre, precio, disponibilidad, id }) => {
    return (
        <div className = 'tc bg-light-purple white dib br3 pa3 ma2 grow bw2 shadow-5 relative'>
            <img alt='equipos' src={`https://robohash.org/${id}?150x150`}/>
            <div>
                <h2>{nombre}</h2>
                <h3>{precio}</h3>
                <p>Disponibilidad: {disponibilidad}</p>
            </div>
        </div>
    );
}

export default Tarjeta;