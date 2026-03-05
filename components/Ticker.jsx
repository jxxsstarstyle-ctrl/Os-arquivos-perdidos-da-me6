import { Link } from 'react-router-dom';
import { franchiseLinks } from '../assets/content';

export default function Ticker() {
  const line = [...franchiseLinks, ...franchiseLinks, ...franchiseLinks];
  return (
    <div className="ticker-shell" aria-label="franchise updates">
      <div className="ticker-track">
        {line.map((item, i) => {
          const internal = item.url.startsWith('/');
          return internal ? (
            <Link key={`${item.text}-${i}`} to={item.url} className="ticker-item">
              {item.text}
            </Link>
          ) : (
            <a key={`${item.text}-${i}`} href={item.url} target="_blank" rel="noreferrer" className="ticker-item">
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
