import { Link } from 'react-router-dom';
import { chapterButtons } from '../assets/content';

const features = [
  ['◈', 'Mundo Vivo', 'A Mega 6 não é apenas um espaço digital — é um organismo consciente que respira, aprende e responde às suas escolhas.'],
  ['⬡', 'Fragmentos de Memória', 'Cada canto do universo pulsa com memórias de membros da Swoadly, entrelaçando passado, presente e futuro.'],
  ['◉', 'Narrativa Imersiva', 'Uma perspectiva única em primeira pessoa que coloca você dentro do fluxo da consciência digital.'],
  ['⬢', '3 Capítulos Épicos', 'Da Era dos Fragmentos ao Despertar da Mega 6 — uma jornada de descoberta, perda e renascimento.'],
];

export default function HomePage() {
  return (
    <div className="stack">
      <section className="hero panel">
        <p className="tag">ARQUIVO CLASSIFICADO · MEGA 6 · SYS_ONLINE</p>
        <h1>OS ARQUIVOS PERDIDOS DA <span>MEGA 6</span></h1>
        <p>Um universo digital onde memórias pulsam, sombras têm consciência e cada escolha molda o destino de um mundo que respira.</p>
        <div className="cta-row">
          <Link to="/Read" className="cta">► LER AMOSTRA GRÁTIS</Link>
          <Link to="/Buy" className="cta ghost">[ ADQUIRIR ARQUIVO ]</Link>
        </div>
      </section>

      <section className="grid two">
        {features.map(([icon, title, desc]) => (
          <article key={title} className="panel">
            <h3>{icon} {title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </section>

      <section className="panel">
        <h2>// ARQUIVOS · Explore a Narrativa</h2>
        <div className="chapter-grid">
          {chapterButtons.map((ch) => (
            <button key={ch.file} className="chapter-btn" type="button">
              <span>{ch.symbol}</span>
              <strong>{ch.title}</strong>
              <small>{ch.file}</small>
              <em>{ch.index}</em>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
