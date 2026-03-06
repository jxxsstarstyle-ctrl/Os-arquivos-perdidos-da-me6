import { Outlet } from 'react-router-dom';
import Ticker from './Ticker';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="app-shell scanline-overlay">
      <div className="deploy-proof" aria-label="build-marker">build 0.0.3v alfa</div>
      <Ticker />
      <Navbar />
      <main className="container page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
