import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero panel cyber-border grid-overlay glow-section">
      <p className="hero-tag mono">MODO DIAGNÓSTICO TOTAL · BUILD 0.0.4v</p>
      <h1>
        VERSÃO RADICAL DE TESTE
        <span>: DEPLOY 0.0.4v CONFIRMADO</span>
      </h1>
      <p className="hero-copy">
        Esta tela foi alterada de forma extrema para validar publicação: texto, cores e estrutura foram modificados em conjunto.
      </p>
      <p className="hero-note mono">// CHECKPOINT: 0.0.4v · ALTERAÇÃO RADICAL PARA PROVA DE DEPLOY</p>
      <div className="hero-ctas hero-ctas-elevated">
        <Link to="/Read" className="btn btn-primary cyber-border">► TESTAR ROTA /READ</Link>
        <Link to="/Buy" className="btn btn-ghost">[ TESTAR ROTA /BUY ]</Link>
        <a href="https://neon-quest--juu98atlas.replit.app/" target="_blank" rel="noreferrer" className="btn">PORTAL AFTER.SERVER</a>
      </div>
    </section>
  );
}
