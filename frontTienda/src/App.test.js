import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Tabla from './components/Tabla'

test('render component table', ()=>{
    const cabecera=[{"name":"idproveedor"},{"name":"nombre","sort":"1"},{"name":"CIF"},{"name":"direccion"}];
    const provData=[
        {
            "nombre": "Trudeo",
            "CIF": "B26727182",
            "direccion": "701 Roxbury Point"
        },
        {
            "nombre": "Yoveo",
            "CIF": "B15288194",
            "direccion": "52657 Hermina Plaza"
        }
    ];
    const component=render(<Tabla cabecera={cabecera} datos={provData}/>);
})