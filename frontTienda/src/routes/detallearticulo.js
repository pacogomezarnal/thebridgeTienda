import React, { useState, useEffect } from 'react';
import { Link, Outlet  } from "react-router-dom";
import { useParams } from "react-router-dom";

import Barra from '../components/Barra.js'
import Tabla from '../components/Tabla.js'


export default function DetalleTarea() {

    const [article, setArticle] = useState([]);
    const [articleBool, setarticleBool] = useState(false);

    const getArticle = async () => {
          const article =
              await fetch(`http://localhost:8000/article/`+params.id, {
              method: "GET",
          });
          const articleData = await article.json();
          setArticle(articleData);
          setarticleBool(true);
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
                <h2>Detalle de articulo</h2>
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">{articleBool && article.nombre}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">relevancia: {articleBool && article.relevancia}</h6>
                          <p class="card-text">Precio: {articleBool && article.precio}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-light">Proveedor: {articleBool && article.provider.nombre} (CIF: {articleBool && article.provider.CIF})</li>
                          </ul>
                      </div>
                    </div>
                    <div class="col-6"></div>
                  </div>
                </div>
            </div>
        </div>
    );
}