import React, { useState, useEffect } from 'react';
import { Link, Outlet  } from "react-router-dom";
import Barra from '../components/Barra.js'
import Tabla from '../components/Tabla.js'
//Redux
import {useSelector} from 'react-redux';

export default function ListarTareas() {

    const [providers, setProviders] = useState([]);
    const [providersBool, setprovidersBool] = useState(false);
    const cabecera=[{"name":"idproveedor"},{"name":"nombre","sort":"1"},{"name":"CIF"},{"name":"direccion"}];
    const usuario=useSelector(state=>state);

    const getProviders = async () => {
      const providers =
          await fetch("http://localhost:8000/provider", {
          method: "GET",
       });
        const providersData = await providers.json();
        setProviders(providersData);
        setprovidersBool(true);
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        try {
          getProviders();
        } catch (error) {
          console.log(error);
        }
      }, []);
    return (
    <div>
      <Barra/>
      <div class="container bodygeeks">
            <h2>Listar Proveedores</h2>
            {providersBool && <Tabla cabecera={cabecera} datos={providers}/>}
    </div>
    </div>
    );
  }