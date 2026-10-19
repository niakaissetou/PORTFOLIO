import { useState } from 'react'
import { articles } from '../data/articles'
import { syntheses } from '../data/syntheses'
import ArticleCard from '../components/ArticleCard'

// Le type d'un article, déduit directement de ton fichier data/articles
type Article = (typeof articles)[number]
type Session = [string, Article[]]

function groupBySession(list: Article[]): Session[] {
  const groups: Record<string, Article[]> = {}
  for (const article of list) {
    const group = groups[article.veille] ?? []
    group.push(article)
    groups[article.veille] = group
  }
  return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a))
}

// '2026-10-19' → '19 octobre 2026'
function formatDate(isoDate: string): string {
  return new Date(isoDate + 'T00:00:00').toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Carrousel : affiche une veille à la fois, avec flèches et points
function SessionCarousel({ sessions }: { sessions: Session[] }) {
  const [index, setIndex] = useState(0)
  const session = sessions[index]

  if (!session) return <p>Aucune veille pour le moment.</p>

  const [date, sessionArticles] = session
  const synthese = syntheses[date]

  return (
    <div className="watch-carousel">
      <div key={date} className="watch-session">
        <h3>Veille n°{sessions.length - index} — {formatDate(date)}</h3>
        <div className="articles-grid">
          {sessionArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {synthese && (
          <div className="watch-synthesis">
            <h4>Synthèse</h4>

            <h5>Ce que j’ai appris</h5>
            <p>{synthese.appris}</p>

            <h5>Ce qui a changé</h5>
            <p>{synthese.change}</p>

            <h5>Les points à surveiller</h5>
            <ul>
              {synthese.aSurveiller.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <h5>Lien avec le SISR</h5>
            <p>{synthese.lienSISR}</p>
          </div>
        )}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
          aria-label="Veille plus récente"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="carousel-dots">
          {sessions.map(([sessionDate], i) => (
            <button
              key={sessionDate}
              type="button"
              className={i === index ? 'carousel-dot active' : 'carousel-dot'}
              onClick={() => setIndex(i)}
              aria-label={`Veille n°${sessions.length - i} du ${formatDate(sessionDate)}`}
              aria-current={i === index}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow"
          onClick={() => setIndex(index + 1)}
          disabled={index === sessions.length - 1}
          aria-label="Veille plus ancienne"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function TechWatch() {
  const sessions = groupBySession(articles)

  return (
    <div className="page">
      <h1>Veille technologique</h1>
      <p className="page-intro">Un sujet suivi toute l'année : ma méthode, les articles retenus et mes conclusions.</p>

      <section className="watch-explanation">
        <h2>Veille</h2>
        <p className="watch-subject-question">Qu'est-ce qu'une veille technologique ?</p>
        <p>La veille technologique consiste à observer et analyser les innovations scientifiques et techniques, puis à diffuser les informations utiles pour anticiper leur impact et éclairer les décisions.</p>
      </section>

      <section className="watch-subject">
        <h2>Mon sujet</h2>
        <p className="watch-subject-question">Dans quelle mesure les réseaux satellitaires peuvent-ils assurer la continuité des communications en cas de rupture des câbles sous-marins ?</p>
        <p>Pourquoi ce sujet ? Le choix s'est orienté sur cette question car elle est directement liée à l'option SISR : la <strong>continuité de service et la redondance des liaisons.</strong> <br></br><br></br>On a souvent tendance à croire qu'Internet passe par les satellites, alors que la <strong>quasi-totalité du trafic international transite par des câbles posés au fond des mers</strong>, qui restent fragiles. <br></br><br></br>Les coupures récentes en mer Baltique et en mer Rouge montrent qu'il s'agit d'un véritable enjeu, y compris pour les entreprises qui dépendent du cloud. L'objectif est de comprendre si les satellites peuvent servir de solution de secours, de la même manière qu'un lien de secours est prévu dans un réseau d'entreprise.</p>
      </section>

      <section>
        <h2>Ma méthode</h2>
        <ul className="method-list">
          <li><strong>Google Alertes</strong><br />tes mots-clés</li>
          <li><strong>Inoreader</strong><br />Sources (flux RSS)</li>
          <li><strong>Rythme</strong><br />1 fois toutes les deux semaines.</li>
        </ul>
      </section>

      <section>
        <h2>Articles</h2>
        <SessionCarousel sessions={sessions} />
      </section>

      <section className="watch-summary">
        <h2>Conclusion</h2>
        <p>À rédiger à la fin de l'année.</p>
      </section>
    </div>
  )
}

export default TechWatch