import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState('vacio')
    const [lastname, setLastname] = useState('vacio lastname')
    function cambioName(e){
        console.log('cambioName')
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setName(e.target.value)

    }

    
	return (
        <>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                <input type="text" value={name} onChange={cambioName} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                <input type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value)}}  className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
            </div>
        </>
	);
};

export default Form;
