import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero panel cyber-border grid-overlay glow-section">
      <p className="hero-tag mono">PROTOCOLO REABERTO · NEXUS MEGA 6 · BUILD EXPERIMENTAL</p>
      <h1>
        NOVA INTERFACE DOS ARQUIVOS
        <span> PERDIDOS · MEGA 6</span>
      </h1>
      <p className="hero-copy">
        Visual renovado, leitura mais clara e navegação mais direta — agora você entra nos arquivos com foco total na história.
      </p>
      <p className="hero-note mono">// VERSÃO EXPERIMENTAL 0.0.2v alfa · LAYOUT E TEMA EM TESTE</p>
      <div className="hero-ctas hero-ctas-elevated">
        <Link to="/Read" className="btn btn-primary cyber-border">► ABRIR LEITURA IMEDIATA</Link>
        <Link to="/Buy" className="btn btn-ghost">[ VER PLANOS DE ACESSO ]</Link>
        <a href="https://neon-quest--juu98atlas.replit.app/" target="_blank" rel="noreferrer" className="btn">PORTAL AFTER.SERVER</a>
      </div>
    </section>
  );
}
