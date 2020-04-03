import React from 'react';

const Tarjeta = ({ name, modelo, precio, link, id }) => {
    return (
        <div className = 'tc bg-light-purple white dib br3 pa3 ma2 grow bw2 shadow-5 relative'>
            <img alt='equipos!' src={link}/>
            <div>
                <h2>{name}</h2>
                <h3>{modelo}</h3>
                <h3>{precio}</h3>

            </div>
        </div>
    );
}



export default Tarjeta;