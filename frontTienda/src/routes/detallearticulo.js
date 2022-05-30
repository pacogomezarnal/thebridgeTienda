import React, { useState, useEffect } from 'react';
import { Link, Outlet  } from "react-router-dom";
import { useParams } from "react-router-dom";

import Barra from '../components/Barra.js'
import Tabla from '../components/Tabla.js'


export default function DetalleTarea() {

    const [article, setArticle] = useState([]);
    const [articlesBool, setArticlesBool] = useState(false);
    const cabecera=["idarticulo","nombre","relevancia","precio"];

    const getArticle = async () => {
          const article =
              await fetch(`http://localhost:8000/article/`+params.id, {
              method: "GET",
          });
          const articleData = await article.json();
          //Solo se realiza para reutilizar la tabla
          const articleArr = [];
          articleArr.push(articleData);
          setArticle(articleArr);
          setArticlesBool(true);
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        try {
          getArticle();
        } catch (error) {
          console.log(error);
        }
      }, []);
    const params = useParams()
    return (
        <div>
            <Barra/>
            <div class="container bodygeeks">
                <h2>Detalle de articulo: {article.nombre}</h2>
                {articlesBool && <Tabla cabecera={cabecera} datos={article}/>}
            </div>
        </div>
    );
}