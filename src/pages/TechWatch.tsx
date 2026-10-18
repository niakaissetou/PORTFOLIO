import { articles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'

function TechWatch() {
  return (
    <>
      <h1>Veille technologique</h1>

      <section>
        <h2>Mon sujet</h2>
        <p><strong>Les satellites peuvent-ils assurer la redondance des câbles sous-marins ?</strong></p>
        <p>Pourquoi ce sujet : ton paragraphe.</p>
      </section>

      <section>
        <h2>Ma méthode</h2>
        <ul>
          <li>Google Alertes, sur les mots-clés : …</li>
          <li>Agrégateur de flux RSS (Inoreader), avec les sources : …</li>
          <li>Rythme : …</li>
        </ul>
      </section>

      <section>
        <h2>Articles</h2>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>

      <section>
        <h2>Ce que j'en retiens</h2>
        <p>à compléter au fil de l'année.</p>
      </section>
    </>
  )
}

export default TechWatch