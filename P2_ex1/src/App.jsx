import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import './styles.css'
import Contacto from './Contacto'
import { Route, Routes } from 'react-router-dom'
import SobreMi from './SobreMi'
import Blogs from './Blogs'
import Manualidades from './Manualidades'





function App() {

  return (

    <div id="contenedorGeneral">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/manualidades" element={<Manualidades />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
