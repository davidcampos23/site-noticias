import React from 'react'
import ReactDOM from 'react-dom/client'
import Titulo from './Titulo.jsx'
import MaisPopulares from './MaisPopulares.jsx'
import Categorias from './Categorias.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Titulo/>
    <MaisPopulares/>
    <Categorias/>
    {/* <App /> */}
  </React.StrictMode>,
)
