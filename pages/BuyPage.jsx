import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';

const plans = [
  ['FILE_ACCESS_01', 'DIGITAL', 'Acesso ao arquivo digital completo', 'R$ 19,90', ['Livro completo em PDF/ePub', 'Todos os 3 capítulos', 'Atualizações futuras', 'Leitura em qualquer dispositivo']],
  ['FILE_ACCESS_02', 'PREMIUM', 'Edição completa com conteúdo classificado', 'R$ 34,90', ['Tudo do plano Digital', 'Conteúdo exclusivo bônus', 'Mapa interativo da Mega 6', 'Acesso a conteúdo futuro', 'Comunidade de leitores']],
  ['FILE_ACCESS_03_OMEGA', 'COLECIONADOR', 'Para os verdadeiros membros da Swoadly', 'R$ 59,90', ['Tudo do plano Premium', 'Arte conceitual exclusiva', 'Diário dos Fragmentos (PDF)', 'Carta do autor', 'Nome nos agradecimentos']],
];

export default function BuyPage() {
  return (
    <div className="stack-xl">
      <Section className="cyber-border">
        <Link to="/Home" className="back">← VOLTAR</Link>
        <h1 className="page-title">OS ARQUIVOS PERDIDOS DA MEGA 6</h1>
        <Link to="/Read" className="btn btn-ghost">[ LER AMOSTRA ]</Link>
      </Section>

      <Section subtitle="// ACESSO AO ARQUIVO" title="Escolha seu Nível de Acesso" className="cyber-border">
        <p className="lead">Entre no universo da Mega 6 e descubra os arquivos que nunca deveriam ter sido perdidos.</p>
        <div className="grid three">
          {plans.map(([code, tier, desc, price, benefits]) => (
            <Card key={code} overline={code} title={tier} className="price-card corner-brackets">
              <p>{desc}</p>
              <p className="price">{price}</p>
              <ul>{benefits.map((b) => <li key={b}>◈ {b}</li>)}</ul>
              <a className="btn btn-primary" href="https://pay.cakto.com.br/hpts5d5_734041" target="_blank" rel="noreferrer">► ADQUIRIR</a>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
