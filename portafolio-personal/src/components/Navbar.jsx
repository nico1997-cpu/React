import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" end>
        Inicio
      </NavLink>
      <NavLink to="/proyectos" className="nav-link">
        Proyectos
      </NavLink>
      <NavLink to="/contacto" className="nav-link">
        Contacto
      </NavLink>
    </nav>
  )
}
