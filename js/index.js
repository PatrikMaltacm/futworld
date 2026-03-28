const API_KEY = "02aad93c623245be9307b2a95bf329ed";
const BASE_URL = "https://newsapi.org/v2/everything?q=futebol&from=2026-02-28&sortBy=publishedAt";

async function getNewsFutebol() {
  const container = document.getElementById('news-container');
  container.innerHTML = "<h2>Carregando notícias de futebol...</h2>";

  try {
    const response = await fetch(`${BASE_URL}&apiKey=${API_KEY}`);
    const dados = await response.json();

    if (dados.articles) {
      renderizarCards(dados.articles);
    }
  } catch (err) {
    console.error("Erro ao buscar noticias: ", err);
    container.innerHTML = "<h2>Erro ao carregar notícias. Tente novamente.</h2>";
  }
}

function renderizarCards(articles) {
  const container = document.getElementById('news-container');
  container.innerHTML = ""; // Limpa o carregando

  articles.forEach(article => {
    // Evita notícias sem título ou imagem deletada
    if (!article.title || article.title === "[Removed]") return;

    const card = document.createElement('article');
    card.className = 'news-card';

    card.innerHTML = `
      <img src="${article.urlToImage || 'https://via.placeholder.com/300x180?text=FutWorld'}" alt="Notícia">
      <div class="card-body">
        <h4>${article.title}</h4>
        <p>${article.description ? article.description.slice(0, 100) + '...' : 'Clique para ler mais detalhes sobre esta notícia.'}</p>
        <a href="${article.url}" target="_blank" class="btn-link">Ler notícia completa →</a>
      </div>
    `;

    container.appendChild(card);
  });
}

window.onload = getNewsFutebol;