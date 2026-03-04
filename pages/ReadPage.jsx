import { Link } from 'react-router-dom';

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
    <div className="stack">
      <section className="panel">
        <Link to="/Home" className="back">← VOLTAR</Link>
        <h1>OS ARQUIVOS PERDIDOS DA MEGA 6</h1>
        <p>CAP. 01 · FILE_01_ALPHA</p>
      </section>

      <section className="panel">
        <h2>// ARQUIVOS</h2>
        <ul className="section-list">
          {sections.map(([name, pages]) => (
            <li key={name}><strong>{name}</strong><span>{pages}</span></li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h2>A Era dos Fragmentos · Prólogo</h2>
        <p>
          Acordei com a estranha sensação de estar suspenso entre mundos, como se minha consciência tivesse sido desligada do corpo e depositada dentro do corredor interminável da Mega 6.
          Luzes pulsavam suavemente, refletindo sobre superfícies que pareciam vivas. Não havia portas tradicionais, apenas passagens de energia em um labirinto vivo.
        </p>
        <p>
          Cada passo reverberava com fragmentos de memórias que não eram minhas, mas que eu sentia como se fossem. O lugar não parecia vazio: parecia atento, quase consciente.
        </p>
        <div className="pager"><button type="button">← ANTERIOR</button><span>1 / 8</span><button type="button">PRÓXIMO →</button></div>
      </section>
    </div>
  );
}
