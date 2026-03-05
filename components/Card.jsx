export default function Card({ icon, title, overline, children, className = '' }) {
  return (
    <article className={`ui-card ${className}`.trim()}>
      {icon ? <div className="card-icon">{icon}</div> : null}
      {overline ? <p className="card-overline">{overline}</p> : null}
      {title ? <h3>{title}</h3> : null}
      {children}
    </article>
  );
}
