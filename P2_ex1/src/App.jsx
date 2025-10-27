import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import './styles.css'
import Contacto from './Contacto'


function App() {

  return (
  
      <div id="contenedorGeneral">
        <Header/>
        {/*<Contacto/>*/}
        <Home/>
        <Footer/>
      </div>
  )
}

export default App
