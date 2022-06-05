import React, { useState, useEffect } from 'react';
import { Link, Outlet  } from "react-router-dom";

const Tabla = props => {
    const [cabecera,setCabecera]=useState(props.cabecera);
    const [datos,setDatos]=useState(props.datos);
    const [tipo,setTipo]=useState(props.tipo);

    const upData = () => {
        const datosSort = [...datos].sort((a, b) =>
            a.nombre.toLowerCase() < b.nombre.toLowerCase() ? -1 : 1
        );
        setDatos(datosSort);
    };

    const downData = () => {
        const datosSort = [...datos].sort((a, b) =>
            a.nombre.toLowerCase() > b.nombre.toLowerCase() ? -1 : 1
        );
        setDatos(datosSort);
    };

    const cabeceraTabla = cabecera.map((item) =>{
        if(item.sort=="1"){
            return(<th scope="col" >{item.name}<a href="#" onClick={upData}><i class="bi bi-caret-up-fill"></i></a><a href="#" onClick={downData}><i class="bi bi-caret-down-fill"></i></a></th>)
        }else{
            return(<th scope="col">{item.name}</th>)
        }
    });
    console.log(datos);
    const datosTabla = datos.map((item) =>{
            return(
                <tr>
                    <td>{tipo=="articles"?<Link to={`/articulos/${item._id}/ver`} key={item._id}>{item._id}</Link>:item._id}</td>
                    <td>{item.nombre}</td>
                    <td>{tipo=="articles"?item.relevancia:item.CIF}</td>
                    <td>{tipo=="articles"?item.precio:item.direccion}</td>
                </tr>
            )
        }
    )

    useEffect(() => {
      }, []);
    return(
        <table class="table">
        <thead>
            <tr>
                {cabeceraTabla}
            </tr>
        </thead>
        <tbody>
            {datosTabla}
        </tbody>
        </table>

    )
}

export default Tabla;