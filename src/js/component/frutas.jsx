import React, { useState } from "react";

const Frutas = () => {
    // let frutas = []
    // conts[variable, funciona que modifica a la varible ] = useState(valor incial de la variable)
    const [frutas, setFrutas] = useState([ 'pera','manzana','platanos de canarias','ciruela','naranja','pera'])
    const[ texto,setTexto] = useState('soy una variable con memoria')

	return (
        <>
            <h1>Frutas</h1>
            {texto}
            <h2>original</h2>
            <p>

                {frutas}
            </p>
            <h2>Con MAP</h2>
            {frutas.map( (fruta, index)=> <p key={index} id={index}> {fruta} {index}</p>  )}
        </>
	);
};

export default Frutas;
