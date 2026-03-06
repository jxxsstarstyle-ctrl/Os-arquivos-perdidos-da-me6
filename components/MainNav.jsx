import { Link, NavLink } from 'react-router-dom';

export default function MainNav() {
  return (
    <header className="main-nav">
      <Link to="/Home" className="brand">SYS <span>MEGA 6</span></Link>
      <a href="https://neon-quest--juu98atlas.replit.app/" target="_blank" rel="noreferrer" className="link-btn">AFTER.SERVER</a>
      <nav>
        <NavLink to="/Read">[ LER ]</NavLink>
        <NavLink to="/Buy">COMPRAR</NavLink>
      </nav>
    </header>
  );
}
