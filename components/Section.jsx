export default function Section({ title, subtitle, className = '', children }) {
  return (
    <section className={`section panel ${className}`.trim()}>
      {(title || subtitle) && (
        <header className="section-head">
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
          {title ? <h2>{title}</h2> : null}
        </header>
      )}
      {children}
    </section>
  );
}
