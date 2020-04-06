import React from 'react';

const Tarjeta = ({ nombre, modelo, precio, link, url, id }) => {
    return (
        <div className = 'tc bg-light-purple white dib br3 pa3 ma2 grow bw2 shadow-5 relative'>
        <a target="_blank" href={link}>
            <img alt='equipos' style={{height: '200px'}} src={url}/>
        </a>
            <div>
                <h3>{modelo}</h3>
                <h2>{nombre}</h2>
                <p>Precio: {precio}</p>

            </div>
        </div>
    );
}



export default Tarjeta;