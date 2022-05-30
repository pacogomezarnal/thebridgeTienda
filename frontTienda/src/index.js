import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppLoged from './AppLoged';
import reportWebVitals from './reportWebVitals';
//Rutas Tareas
import ListarProveedores from "./routes/listarproveedores.js";
import DetalleArticulo from "./routes/detallearticulo.js";
//Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const rootElement = document.getElementById("root");

const storeReducer = (state=[],action) =>{
  switch (action.type) {
    case 'ADD_USER':
      return state=action.payload;
    case 'RESET':
      return state=[];
    default:
      return state
  }
}
const store=createStore(storeReducer);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/proveedores" element={<ListarProveedores />} />
      <Route path="/articulos/:id/:ver" element={<DetalleArticulo/>} />
    </Routes>
  </BrowserRouter>
  </Provider>
  ,
  rootElement
);

reportWebVitals();
