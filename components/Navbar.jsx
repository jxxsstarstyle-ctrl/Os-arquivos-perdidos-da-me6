import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/Home" className="brand-mark">MEGA6 <span>BUILD 0.0.4v</span></Link>
        <span className="version-pill">0.0.4v ativo</span>
        <a href="https://neon-quest--juu98atlas.replit.app/" target="_blank" rel="noreferrer" className="nav-ext">AFTER.SERVER</a>
        <nav className="nav-links" aria-label="Navegação principal">
          <NavLink to="/Read">[ LER ]</NavLink>
          <NavLink to="/Buy">COMPRAR</NavLink>
        </nav>
      </div>
    </header>
  );
}
