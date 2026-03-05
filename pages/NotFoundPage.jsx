import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="panel section cyber-border">
      <p className="section-subtitle">ERRO 404</p>
      <h1>Page Not Found</h1>
      <p>A página solicitada não foi encontrada neste arquivo.</p>
      <Link to="/Home" className="btn btn-primary">Go Home</Link>
    </section>
  );
}
