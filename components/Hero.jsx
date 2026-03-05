import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero panel">
      <p className="hero-tag">ARQUIVO CLASSIFICADO · MEGA 6 · SYS_ONLINE</p>
      <h1>
        OS ARQUIVOS PERDIDOS DA
        <span> MEGA 6</span>
      </h1>
      <p className="hero-copy">
        Um universo digital onde memórias pulsam, sombras têm consciência e cada escolha molda o destino de um mundo que respira.
      </p>
      <p className="hero-note">// PARTE DA FRANQUIA AFTER.SERVER · CONTEÚDO CLASSIFICADO</p>
      <div className="hero-ctas">
        <Link to="/Read" className="btn btn-primary">► LER AMOSTRA GRÁTIS</Link>
        <Link to="/Buy" className="btn btn-ghost">[ ADQUIRIR ARQUIVO ]</Link>
        <a href="https://neon-quest--juu98atlas.replit.app/" target="_blank" rel="noreferrer" className="btn btn-link">ACESSAR AFTER.SERVER</a>
      </div>
    </section>
  );
}
