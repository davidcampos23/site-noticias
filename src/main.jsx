import React from 'react'
import ReactDOM from 'react-dom/client'
import Titulo from './Titulo.jsx'
import MaisPopulares from './MaisPopulares.jsx'
import Categorias from './Categorias.jsx'
import Noticias from './Noticias.jsx'
import Artigos from './Artigos.jsx'
import './index.css'
import MaisPopularesExtend from './MaisPopularesExtend.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Titulo/>
    <Categorias/>
    <MaisPopulares/>
    <MaisPopularesExtend/>
    <div className='flex'>
      <Artigos />
      <Noticias/>
    </div>
  </React.StrictMode>,
)
