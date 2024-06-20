import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MenuList from './MenuList.jsx'
import nexcent from './img/Logo.png'
import banner from './img/react.svg'
import BannerTexto from './BannerTexto.jsx'
import NuestrosClientes from './NuestrosClientes.jsx'
import Coffee from './img/bxs-coffee-bean.svg'
import Audible from './img/bxl-audible.svg'
import MasterCard from './img/bxl-mastercard.svg'
import Sushi from './img/bx-sushi.svg'
import Book from './img/bx-book-alt.svg'
import Cards from './Cards.jsx'
import Icon1 from './img/Icon1.png'
import Icon2 from './img/Icon2.png'
import Icon3 from './img/Icon3.png'
import TitBajo from './TituloBajo.jsx'
import Baja1 from './img/imagen1.png'
import Baja2 from './img/imagen2.png'
import Baja3 from './img/imagen3.png'
import Comunidades from './Comunidades.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <main>
    <div className="header">
      <img src={nexcent} alt="Logo"></img>
      <div className="content-link" id="menu-list">
        <MenuList nombre='Inicio' link='#' />
        <MenuList nombre='Servicios' link='#' />
        <MenuList nombre='Colaboraciones' link='#' />
        <MenuList nombre='Productos' link='#' />
        <MenuList nombre='Testimonios' link='#' />
        <MenuList nombre='Google' link='https://www.google.com/' />
      </div>
    </div>
    <div className="banner">
      <BannerTexto className='texto' />
      <img id='imgBanner' src={banner}></img>
    </div>
    <div>
      <NuestrosClientes id='clientes' />
    </div>
    <div>
      <img className='imgClientes' src={Coffee} alt="coffee"></img>
      <img className='imgClientes' src={Audible} alt="audible"></img>
      <img className='imgClientes' src={MasterCard} alt="mastercard"></img>
      <img className='imgClientes' src={Sushi} alt="sushi"></img>
      <img className='imgClientes' src={Book} alt="book"></img>
    </div>
    <div>
      <Comunidades />
    </div>
    <div className='cards'>
      <div>
        <img className='imgClientes' src={Icon1} alt="audible"></img>
        <Cards className='cardsInt' titulo='Membresías' parrafo='
          Nuestro software de gestión de membresías proporciona una automatización completa de las renovaciones y pagos de las membresías.' />
      </div>
      <div>
        <img className='imgClientes' src={Icon2} alt="audible"></img>
        <Cards className='cardsInt' titulo='Asociaciones' parrafo='
          Nuestro software de gestión de membresías proporciona una automatización completa de las renovaciones y pagos de las membresías.' />
      </div>
      <div>
        <img className='imgClientes' src={Icon3} alt="audible"></img>
        <Cards className='cardsInt' titulo='Clubes' parrafo='
          Nuestro software de gestión de membresías proporciona una automatización completa de las renovaciones y pagos de las membresías.' />
      </div>
    </div>
    <div>
      <TitBajo />
    </div>
    <div>
      <img className='imgBaja' src={Baja1} alt="img1"></img>
      <img className='imgBaja' src={Baja2} alt="img2"></img>
      <img className='imgBaja' src={Baja3} alt="img3"></img>
    </div>
  </main >
) 