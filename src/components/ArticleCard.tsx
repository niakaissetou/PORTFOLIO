import type { Article } from '../types/Articles.ts'

function ArticleCard({ article }: { article: Article }) {
  const date = new Date(article.date).toLocaleDateString('fr-FR', { timeZone: 'UTC' })

  return (
    <article>
      <p>{article.source} · {date}</p>
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Lire l'article sur {article.source}
      </a>
    </article>
  )
}

export default ArticleCard