function Documents() {
  const tableauUrl = import.meta.env.BASE_URL + 'documentations/tableau-de-synthese-e6.pdf'

  return (
    <div className="page">
      <h1>Tableau de synthèse</h1>
      <p className="page-intro">
        Le document officiel de l'épreuve : toutes mes réalisations professionnelles et les compétences qu'elles mobilisent.
      </p>

      <article className="doc-card">
        <div className="doc-card-badge" aria-hidden="true">PDF</div>
        <div className="doc-card-text">
          <h2>Tableau de synthèse des réalisations professionnelles</h2>
          <p className="doc-card-description">BTS SIO option SISR · document PDF</p>
        </div>
        <div className="doc-card-actions">
          <a href={tableauUrl} target="_blank" className="button">Ouvrir</a>
          <a href={tableauUrl} download className="button button-outline">Télécharger</a>
        </div>
      </article>
    </div>
  )
}

export default Documents