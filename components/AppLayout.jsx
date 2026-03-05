import { Outlet } from 'react-router-dom';
import Ticker from './Ticker';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="app-shell">
      <Ticker />
      <Navbar />
      <main className="container page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
