import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (

    <header>
      <img id="logo" src="img/logito.png" alt="" />
      <nav>
        <ul>
          <li><Link 
          to="/"
          className={`nav-link ${isActive('/') ? 'active' : ''}`}>
          Inici
          </Link></li>

          <li><Link 
          to="/sobremi"
          className={`nav-link ${isActive('/sobremi') ? 'active' : ''}`}>
          Sobre mi
          </Link></li>

          <li><Link 
          to="/blogs"
          className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}>
          Blogs
          </Link></li>
          
          <li><Link 
          to="/manualidades"
          className={`nav-link ${isActive('/manualidades') ? 'active' : ''}`}>
          Manualidades
          </Link></li>

          <li><Link 
          to="/perfil"
          className={`nav-link ${isActive('/perfil') ? 'active' : ''}`}>
          Perfil
          </Link></li>

          <li><Link 
          to="/contacto"
          className={`nav-link ${isActive('/contacto') ? 'active' : ''}`}>
          Contacto
          </Link></li>
        </ul>
      </nav>
    </header>


  )
}

export default Header