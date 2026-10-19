import { articles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'

function TechWatch() {
  return (
    <div className="page">
      <h1>Veille technologique</h1>
      <p className="page-intro">Un sujet suivi toute l'année : ma méthode, les articles retenus et mes conclusions.</p>

      <section className="watch-subject">
        <h2>Mon sujet</h2>
        <p className="watch-subject-question">Les satellites peuvent-ils assurer la redondance des câbles sous-marins ?</p>
        <p>Pourquoi ce sujet : ton paragraphe.</p>
      </section>

      <section>
        <h2>Ma méthode</h2>
        <ul className="method-list">
          <li><strong>Google Alertes</strong><br />tes mots-clés</li>
          <li><strong>Inoreader</strong><br />tes sources (flux RSS)</li>
          <li><strong>Rythme</strong><br />ta fréquence</li>
        </ul>
      </section>

      <section>
        <h2>Articles</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="watch-summary">
        <h2>Ce que j'en retiens</h2>
        <p>À compléter au fil de l'année.</p>
      </section>
    </div>
  )
}

export default TechWatch