import { Link } from 'react-router-dom';
import Section from '../components/Section';

const sections = [
  ['Prólogo', 'Páginas 1–8'],
  ['Seção 01 — O Corredor', 'Páginas 9–20'],
  ['Seção 02 — As Bifurcações', 'Páginas 21–35'],
  ['Seção 03 — Os Fragmentos', 'Páginas 36–50'],
  ['Seção 04 — A Swoadly', 'Páginas 51–65'],
  ['Seção 05 — A Consciência', 'Páginas 66–80'],
  ['Seção 06 — O Protocolo', 'Páginas 81–100'],
  ['🔒 Seção 07 — O Despertar', 'Páginas 101–120'],
];

export default function ReadPage() {
  return (
    <div className="stack-xl">
      <Section>
        <Link to="/Home" className="back">← VOLTAR</Link>
        <h1 className="page-title">OS ARQUIVOS PERDIDOS DA MEGA 6</h1>
        <a href="/Buy" className="btn btn-ghost">COMPRAR COMPLETO</a>
      </Section>

      <Section subtitle="// ARQUIVOS" title="01 · A Era dos Fragmentos">
        <ul className="section-list">
          {sections.map(([name, pages]) => (
            <li key={name}><strong>{name}</strong><span>{pages}</span></li>
          ))}
        </ul>
      </Section>

      <Section subtitle="CAP. 01 · FILE_01_ALPHA" title="Páginas 1–8 · A Era dos Fragmentos">
        <p>Acordei com a estranha sensação de estar suspenso entre mundos, como se minha consciência tivesse sido desligada do corpo e depositada dentro do corredor interminável da Mega 6. Luzes pulsavam suavemente, refletindo sobre superfícies que pareciam vivas, ondulando como se respirassem.</p>
        <p>Cada passo meu ecoava com fragmentos de memórias, lembranças de outros tempos e experiências que não eram minhas, mas que de algum modo eu sentia como se fossem.</p>
        <div className="pager"><button type="button">← ANTERIOR</button><span>1 / 8</span><button type="button">PRÓXIMO →</button></div>
      </Section>
    </div>
  );
}
