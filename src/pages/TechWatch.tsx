import { useState } from 'react'
import { articles } from '../data/articles'
import { syntheses } from '../data/syntheses'
import ArticleCard from '../components/ArticleCard'

// Le type d'un article, déduit directement de le fichier data/articles
type Article = (typeof articles)[number]
type Session = [string, Article[]]

function groupBySession(list: Article[]): Session[] {
  const groups: Record<string, Article[]> = {}
  for (const article of list) {
    const group = groups[article.veille] ?? []
    group.push(article)
    groups[article.veille] = group
  }
  // Ordre chronologique : la plus ancienne veille d'abord
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b))
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
        <h3>Veille n°{index + 1} — {formatDate(date)}</h3>
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

            <h5>À retenir</h5>
            <p>{synthese.change}</p>

            <h5>Les points à surveiller</h5>
            <ul>
              {synthese.aSurveiller.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
          aria-label="Veille précédente"
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
              aria-label={`Veille n°${i + 1} du ${formatDate(sessionDate)}`}
              aria-current={i === index}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow"
          onClick={() => setIndex(index + 1)}
          disabled={index === sessions.length - 1}
          aria-label="Veille suivante"
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
        <p className="watch-subject-question">Dans quelle mesure WireGuard constitue-t-il une alternative à OpenVPN et IPsec pour sécuriser les accès distants en entreprise ?</p>
        <p>Pourquoi ce sujet ? Le choix s'est orienté sur cette question car elle est directement liée à l'option SISR : la <strong>sécurisation des accès distants.</strong> Avec le télétravail, les salariés doivent pouvoir se connecter au réseau de l'entreprise depuis l'extérieur, et le VPN reste la solution la plus utilisée pour cela.<br /><br />Depuis des années, les entreprises utilisent surtout <strong>OpenVPN et IPsec</strong>, deux solutions complexes à configurer et à maintenir. <strong>WireGuard</strong>, plus récent, mise au contraire sur la simplicité : un code beaucoup plus court.<br /><br />L'objectif est de comprendre si WireGuard peut réellement remplacer OpenVPN et IPsec en entreprise, en comparant leur sécurité, leurs performances, leur compatibilité avec les pare-feu et leur facilité d'administration.</p>
      </section>

      <section className="watch-rappel">
        <h2>Rappel : comment fonctionne un VPN ?</h2>
        <p className="watch-rappel-intro">Un VPN crée un <strong>tunnel chiffré</strong>, c'est-à-dire illisible pour quelqu'un qui n'a pas la clé, entre l'ordinateur d'un salarié et le réseau de l'entreprise. Ce tunnel repose sur un <strong>protocole</strong> : des règles qui définissent comment chiffrer et transporter les données. Voici les trois plus utilisés en entreprise.</p>

        <ul className="protocol-list">
          <li className="protocol-card">
            <h3>IPsec</h3>
            <p>Chiffre chaque paquet de données au niveau réseau (couche 3, celle des adresses IP).</p>
            <ul className="protocol-facts">
              <li><span>Ports</span>UDP 500 et 4500</li>
              <li><span>Atout</span>Intégré à Windows et macOS : rien à installer</li>
              <li><span>Limite</span>Parfois bloqué par les pare-feu stricts</li>
              <li><span>Comment s'identifier</span>Certificat, clé partagée ou compte utilisateur</li>
              <li><span>Logiciel</span>strongSwan (sous Linux)</li>
            </ul>
          </li>
          <li className="protocol-card">
            <h3>OpenVPN</h3>
            <p>Chiffre les paquets de données avec TLS, le même chiffrement que les sites en HTTPS, puis les transporte dans une connexion UDP ou TCP.</p>
            <ul className="protocol-facts">
              <li><span>Ports</span>UDP 1194 par défaut, ou TCP 443</li>
              <li><span>Atout</span>Passe presque tous les pare-feu</li>
              <li><span>Limite</span>Logiciel à installer, code plus volumineux (donc plus de risques de failles)</li>
              <li><span>Comment s'identifier</span>Certificat, ou identifiant et mot de passe</li>
              <li><span>Logiciel</span>OpenVPN</li>
            </ul>
          </li>
          <li className="protocol-card">
            <h3>WireGuard</h3>
            <p>Chiffre chaque paquet de données et le transporte dans un paquet UDP. Chaque appareil a une paire de clés : une privée, gardée secrète, et une publique, donnée au serveur, qui garde la liste des appareils autorisés.</p>
            <ul className="protocol-facts">
              <li><span>Port</span>UDP 51820 par défaut</li>
              <li><span>Atout</span>Très simple (environ 4 000 lignes de code) et rapide</li>
              <li><span>Limite</span>UDP uniquement, ne reconnaît que des appareils et pas les utilisateurs</li>
              <li><span>Comment s'identifier</span>Une paire de clés par appareil</li>
              <li><span>Logiciel</span>WireGuard</li>
            </ul>
          </li>
        </ul>

        <p className="watch-rappel-note">D'autres protocoles existent, comme SSTP de Microsoft. Les plus anciens, PPTP et L2TP/IPsec, sont aujourd'hui déconseillés, car moins sûrs ou plus lents.</p>

        <div className="watch-callout">
          <h3>Le post-quantique en 4 étapes</h3>
          <ol className="steps">
            <li>Au début de chaque connexion, le PC et le serveur utilisent leurs clés publiques et privées pour fabriquer ensemble une clé temporaire : la <strong>clé de session</strong>, qui chiffre les données.</li>
            <li>Un pirate peut copier tout ce qui passe sur le réseau : les adresses IP, le début de la connexion (qui ne contient que les clés publiques) et les données chiffrées. Aujourd'hui, il ne peut rien en faire.</li>
            <li>À l'avenir, un <strong>ordinateur quantique</strong> (un futur type d'ordinateur, beaucoup plus puissant pour certains calculs) pourrait recalculer la clé de session à partir du début de la connexion, puis déchiffrer toutes les données copiées.</li>
            <li>Les <strong>algorithmes post-quantiques</strong> sont conçus pour empêcher ce calcul.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>Ma méthode</h2>
        <ul className="method-list">
          <li><strong>Google Alertes</strong><br />WireGuard, OpenVPN, IPsec, faille VPN, "WireGuard" "OpenVPN", "WireGuard" "IPsec", "Tailscale", "WireGuard" faille, ...</li>
          <li><strong>Inoreader</strong><br />Flux RSS : CERT-FR, IT-Connect, SecurityWeek, The Hacker News, Tailscale, ...</li>
          <li><strong>Youtube</strong><br></br> Vidéos, podcasts sur le sujet</li>
          <li><strong>Rythme</strong><br />1 fois toutes les deux semaines.</li>
        </ul>
      </section>

      <section>
        <h2>Articles</h2>
        <SessionCarousel sessions={sessions} />
      </section>

      <section className="watch-summary">
        <h2>Conclusion et lien avec l'option SISR</h2>
        <p>À rédiger à la fin de l'année.</p>
      </section>
    </div>
  )
}

export default TechWatch