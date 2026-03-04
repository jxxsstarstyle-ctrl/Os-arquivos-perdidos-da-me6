import { Outlet } from 'react-router-dom';
import TopTicker from './TopTicker';
import MainNav from './MainNav';

export default function AppLayout() {
  return (
    <div>
      <TopTicker />
      <MainNav />
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">© 2026 Os Arquivos Perdidos da Mega 6 · Todos os direitos reservados</footer>
    </div>
  );
}
