import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero panel cyber-border grid-overlay glow-section">
      <p className="hero-tag mono">ARQUIVO CLASSIFICADO · MEGA 6 · SYS_ONLINE</p>
      <h1>
        OS ARQUIVOS PERDIDOS DA
        <span> MEGA 6</span>
      </h1>
      <p className="hero-copy">
        Um universo digital onde memórias pulsam, sombras têm consciência e cada escolha molda o destino de um mundo que respira.
      </p>
      <p className="hero-note mono">// PARTE DA FRANQUIA AFTER.SERVER · CONTEÚDO CLASSIFICADO</p>
      <div className="hero-ctas hero-ctas-elevated">
        <Link to="/Read" className="btn btn-primary cyber-border">► LER AMOSTRA GRÁTIS</Link>
        <Link to="/Buy" className="btn btn-ghost">[ ADQUIRIR ARQUIVO ]</Link>
        <a href="https://neon-quest--juu98atlas.replit.app/" target="_blank" rel="noreferrer" className="btn">ACESSAR AFTER.SERVER</a>
      </div>
    </section>
  );
}
