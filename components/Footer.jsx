import { franchiseLinks } from '../assets/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          {franchiseLinks.slice(0, 3).map((item) => (
            <a key={item.text} href={item.url} target={item.url.startsWith('/') ? undefined : '_blank'} rel="noreferrer">
              {item.text.split('—')[0].trim()}
            </a>
          ))}
        </div>
        <p>© 2026 Os Arquivos Perdidos da Mega 6 · Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
