import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero panel cyber-border grid-overlay glow-section">
      <p className="hero-tag mono">PROTOCOLO REABERTO · NEXUS MEGA 6 · ESTÉTICA ALFA</p>
      <h1>
        OS ARQUIVOS PERDIDOS DA MEGA 6
        <span>: ECOS DE UM SONHO FORJADO</span>
      </h1>
      <p className="hero-copy">
        Tema reformulado com atmosfera quente, iluminação dramática e leitura guiada para destacar cada parte da narrativa.
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
