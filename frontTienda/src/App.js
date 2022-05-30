import './App.css';
import { useNavigate} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Barra from './components/Barra.js'
import Tabla from './components/Tabla.js'
//Redux
import {useDispatch,useSelector} from 'react-redux';



function App() {

  const [articles, setArticles] = useState([]);
  const [articlesBool, setarticlesBool] = useState(false);
  const cabecera=[{"name":"idarticulo"},{"name":"nombre","sort":"1"},{"name":"relevancia"},{"name":"precio"}];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch({ type: 'RESET',payload: []})


  const getArticles = async () => {
      const articles =
          await fetch("http://localhost:8000/article", {
          method: "GET",
       });
      const articlesData = await articles.json();
      console.log(articlesData);
      setArticles(articlesData);
      setarticlesBool(true);
  }
  useEffect(() => {
    try {
      getArticles();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
  <div>
    <Barra/>
    <div class="container bodygeeks">
            <h2>Listar Articulos</h2>
            {articlesBool && <Tabla cabecera={cabecera} datos={articles} tipo={"articles"}/>}
    </div>
  </div>
  );
}

export default App;
