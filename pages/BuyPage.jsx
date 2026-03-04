import { Link } from 'react-router-dom';

const plans = [
  ['FILE_ACCESS_01', 'DIGITAL', 'R$ 19,90', ['Livro completo em PDF/ePub', 'Todos os 3 capítulos', 'Atualizações futuras', 'Leitura em qualquer dispositivo']],
  ['FILE_ACCESS_02', 'PREMIUM', 'R$ 34,90', ['Tudo do plano Digital', 'Conteúdo exclusivo bônus', 'Mapa interativo da Mega 6', 'Acesso a conteúdo futuro', 'Comunidade de leitores']],
  ['FILE_ACCESS_03_OMEGA', 'COLECIONADOR', 'R$ 59,90', ['Tudo do plano Premium', 'Arte conceitual exclusiva', 'Diário dos Fragmentos (PDF)', 'Carta do autor', 'Nome nos agradecimentos']],
];

export default function BuyPage() {
  return (
    <div className="stack">
      <section className="panel">
        <Link to="/Home" className="back">← VOLTAR</Link>
        <h1>OS ARQUIVOS PERDIDOS DA MEGA 6</h1>
        <p>// ACESSO AO ARQUIVO</p>
      </section>

      <section className="grid three">
        {plans.map(([code, tier, price, benefits]) => (
          <article key={code} className="panel">
            <small>{code}</small>
            <h2>{tier}</h2>
            <p className="price">{price}</p>
            <ul>{benefits.map((b) => <li key={b}>◈ {b}</li>)}</ul>
            <a className="cta" href="https://pay.cakto.com.br/hpts5d5_734041" target="_blank" rel="noreferrer">► ADQUIRIR</a>
          </article>
        ))}
      </section>

      <section className="panel">
        <h3>Ainda com dúvidas? Leia o primeiro capítulo gratuitamente.</h3>
        <Link to="/Read" className="cta ghost">[ LER AMOSTRA ]</Link>
      </section>
    </div>
  );
}
