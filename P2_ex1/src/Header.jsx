import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header>
      {/* Logo de la web */}
      <img
        id="logo"
        src="img/logito.png"
        alt="Logo de mi página de manualidades"
      />

      {/* Navegación principal */}
      <nav aria-label="Menú principal">
        <ul>
          <li>
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              to="/sobremi"
              className={`nav-link ${isActive('/sobremi') ? 'active' : ''}`}
              aria-current={isActive('/sobremi') ? 'page' : undefined}
            >
              Sobre mí
            </Link>
          </li>

          <li>
            <Link
              to="/blogs"
              className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}
              aria-current={isActive('/blogs') ? 'page' : undefined}
            >
              Blogs
            </Link>
          </li>

          <li>
            <Link
              to="/manualidades"
              className={`nav-link ${isActive('/manualidades') ? 'active' : ''}`}
              aria-current={isActive('/manualidades') ? 'page' : undefined}
            >
              Manualidades
            </Link>
          </li>

          <li>
            <Link
              to="/perfil"
              className={`nav-link ${isActive('/perfil') ? 'active' : ''}`}
              aria-current={isActive('/perfil') ? 'page' : undefined}
            >
              Perfil
            </Link>
          </li>

          <li>
            <Link
              to="/contacto"
              className={`nav-link ${isActive('/contacto') ? 'active' : ''}`}
              aria-current={isActive('/contacto') ? 'page' : undefined}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
