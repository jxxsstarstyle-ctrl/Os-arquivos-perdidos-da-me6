import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { chapterButtons, franchiseLinks } from '../assets/content';

const features = [
  ['◈', 'Mundo Vivo', 'A Mega 6 não é apenas um espaço digital — é um organismo consciente que respira, aprende e responde às suas escolhas.'],
  ['⬡', 'Fragmentos de Memória', 'Cada canto do universo pulsa com memórias de membros da Swoadly, entrelaçando passado, presente e futuro.'],
  ['◉', 'Narrativa Imersiva', 'Uma perspectiva única em primeira pessoa que coloca você dentro do fluxo da consciência digital.'],
  ['⬢', '3 Capítulos Épicos', 'Da Era dos Fragmentos ao Despertar da Mega 6 — uma jornada de descoberta, perda e renascimento.'],
];

export default function HomePage() {
  return (
    <div className="stack-xl">
      <Hero />

      <Section subtitle="// SOBRE O LIVRO" title="Entre no Universo" className="cyber-border glow-section">
        <p className="lead">Uma ficção científica que explora os limites entre consciência humana e mundo digital, onde cada fragmento conta uma história e cada sombra tem intenção.</p>
        <div className="grid two">
          {features.map(([icon, title, desc], index) => (
            <Card key={title} icon={icon} title={title} className="corner-brackets" style={{ animationDelay: `${0.08 * index}s` }}>
              <p>{desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section subtitle="// ARQUIVOS" title="Explore a Narrativa" className="cyber-border glow-section">
        <div className="chapter-grid">
          <div className="chapter-selector">
            {chapterButtons.map((ch, index) => (
              <button key={ch.file} className={`chapter-btn ${index === 0 ? 'is-active' : ''}`} type="button">
                <span>{ch.symbol}</span>
                <strong>{ch.title}</strong>
                <small>{ch.file}</small>
                <em>{ch.index}</em>
              </button>
            ))}
          </div>
          <Card className="chapter-feature corner-brackets" overline="CAPÍTULO 01 · FILE_01_ALPHA" title="A Era dos Fragmentos">
            <p>Back Perspective · 16 seções</p>
            <p>"Acordei com a estranha sensação de estar suspenso entre mundos, como se minha consciência tivesse sido desligada do corpo e depositada dentro do corredor interminável da Mega 6..."</p>
            <div className="chip-row">
              <span className="chip">Exploração</span>
              <span className="chip">Consciência</span>
              <span className="chip">Fragmentos</span>
            </div>
            <Link to="/Read" className="btn btn-primary">► LER AMOSTRA DESTE ARQUIVO</Link>
          </Card>
        </div>
      </Section>

      <Section subtitle="// FRANQUIA AFTER.SERVER" title="Universo Expandido" className="cyber-border glow-section">
        <div className="grid three">
          {franchiseLinks.slice(0, 3).map((item, idx) => (
            <Card key={item.text} icon={['◉', '◈', '⬢'][idx]} title={item.text.split('—')[0].trim()} className="corner-brackets" style={{ animationDelay: `${0.1 * idx}s` }}>
              <p>{item.text.split('—')[1]?.trim() || ''}</p>
              <a href={item.url} target="_blank" rel="noreferrer" className="btn btn-inline">► ACESSAR</a>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="cta-banner cyber-border glow-section" subtitle="SISTEMA DISPONÍVEL · UPLINK ATIVO" title="Pronto para entrar na Mega 6?">
        <p>Mergulhe num universo onde cada fragmento conta uma história e cada passo define o destino de um mundo que respira.</p>
        <div className="hero-ctas">
          <Link to="/Buy" className="btn btn-primary">COMPRAR O LIVRO</Link>
          <Link to="/Read" className="btn btn-ghost">[ LER GRÁTIS ]</Link>
        </div>
      </Section>
    </div>
  );
}
