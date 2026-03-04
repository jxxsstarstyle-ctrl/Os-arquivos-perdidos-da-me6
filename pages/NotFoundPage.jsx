import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="panel">
      <h1>Page Not Found</h1>
      <p>A rota solicitada não existe neste arquivo.</p>
      <Link to="/Home" className="cta">Go Home</Link>
    </section>
  );
}
