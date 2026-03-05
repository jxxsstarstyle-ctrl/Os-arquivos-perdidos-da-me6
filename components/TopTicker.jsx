import { Link } from 'react-router-dom';
import { franchiseLinks } from '../assets/content';

export default function TopTicker() {
  const items = [...franchiseLinks, ...franchiseLinks];
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {items.map((item, index) => {
          const isInternal = item.url.startsWith('/');
          return isInternal ? (
            <Link key={`${item.text}-${index}`} to={item.url} className="ticker-item">
              {item.text}
            </Link>
          ) : (
            <a key={`${item.text}-${index}`} href={item.url} target="_blank" rel="noreferrer" className="ticker-item">
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
