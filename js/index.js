const API_KEY = "pub_8ef4de72676e480ebf7aa6f92e0fab87";
const BASE_URL = `https://newsdata.io/api/1/latest?apikey=pub_8ef4de72676e480ebf7aa6f92e0fab87&country=br&language=pt&category=sports`;

async function getNewsFutebol() {
  const container = document.getElementById('news-container');
  container.innerHTML = "<h2>Carregando notícias de futebol...</h2>";

  try {
    const response = await fetch(`${BASE_URL}&apiKey=${API_KEY}`);
    const dados = await response.json();

    if (dados.results) {
      renderizarCards(dados.results);
    }
  } catch (err) {
    console.error("Erro ao buscar noticias: ", err);
    container.innerHTML = "<h2>Erro ao carregar notícias. Tente novamente.</h2>";
  }
}
let currentSlide = 0;
let slideInterval; // Variável global para controlar o timer

function renderizarCards(articles) {
  const container = document.getElementById('news-container');
  container.innerHTML = "";

  const track = document.createElement('div');
  track.className = 'slider-track';
  track.id = 'slider-track';

  const validArticles = articles.filter(a => a.title && a.title !== "[Removed]");

  validArticles.forEach(article => {
    const slide = document.createElement('a');
    slide.className = 'news-slide';
    slide.href = article.link;
    slide.target = "_blank";
    slide.rel = "noopener noreferrer";
    slide.style.backgroundImage = `url(${article.image_url || 'https://via.placeholder.com/1200x600?text=FutWorld'})`;

    slide.innerHTML = `
            <div class="slide-overlay">
                <h2>${article.title}</h2>
            </div>
        `;
    track.appendChild(slide);
  });

  container.appendChild(track);

  // ADICIONANDO OS BOTÕES MANUALMENTE
  const btnPrev = document.createElement('button');
  btnPrev.className = 'slider-btn prev-btn';
  btnPrev.innerHTML = '&#10094;'; // Ícone <
  btnPrev.onclick = () => moveSlide(-1, validArticles.length);

  const btnNext = document.createElement('button');
  btnNext.className = 'slider-btn next-btn';
  btnNext.innerHTML = '&#10095;'; // Ícone >
  btnNext.onclick = () => moveSlide(1, validArticles.length);

  container.appendChild(btnPrev);
  container.appendChild(btnNext);

  startAutoSlide(validArticles.length);
}

// Função unificada para mover o slide
function moveSlide(direction, total) {
  const track = document.getElementById('slider-track');
  if (!track) return;

  currentSlide = (currentSlide + direction + total) % total;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Resetar o timer para o usuário ter tempo de ler o slide que ele clicou
  resetAutoSlide(total);
}

function startAutoSlide(total) {
  if (total <= 1) return;
  slideInterval = setInterval(() => moveSlide(1, total), 5000);
}

function resetAutoSlide(total) {
  clearInterval(slideInterval);
  startAutoSlide(total);
}

window.onload = getNewsFutebol;