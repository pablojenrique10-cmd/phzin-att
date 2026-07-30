// =========================
// CATÁLOGO DE FILMES COMPLETO
// =========================

const filmes = [
  {
    slug: "interestelar",
    nome: "Interestelar",
    categoria: "MAIS POPULAR",
    ano: "2014",
    genero: "Ficção científica",
    duracao: "2h 49m",
    classificacao: "12+",
    imagem: "https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    trailer: "https://www.youtube.com/watch?v=i6avfCqKcQo",
    descricao: "Uma equipe de exploradores viaja por um buraco de minhoca em busca de um novo lar para a humanidade."
  },
  {
    slug: "o-batman",
    nome: "O Batman",
    categoria: "EM ALTA",
    ano: "2022",
    genero: "Ação / Crime",
    duracao: "2h 56m",
    classificacao: "14+",
    imagem: "https://image.tmdb.org/t/p/w780/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    trailer: "https://www.youtube.com/watch?v=rsQEor4y2hg",
    descricao: "Batman enfrenta crimes misteriosos enquanto descobre segredos sombrios de Gotham City."
  },
  {
    slug: "duna-parte-dois",
    nome: "Duna: Parte Dois",
    categoria: "TOP FILMES",
    ano: "2024",
    genero: "Ficção científica",
    duracao: "2h 46m",
    classificacao: "14+",
    imagem: "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    trailer: "https://www.youtube.com/watch?v=Way9Dexny3w",
    descricao: "Paul Atreides se une aos Fremen em uma jornada épica pelo deserto de Arrakis."
  },
  {
    slug: "homem-aranha-atraves-do-aranhaverso",
    nome: "Homem-Aranha: Através do Aranhaverso",
    categoria: "SUCESSO",
    ano: "2023",
    genero: "Animação / Ação",
    duracao: "2h 20m",
    classificacao: "10+",
    imagem: "https://image.tmdb.org/t/p/w780/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    trailer: "https://www.youtube.com/watch?v=cqGjhVJWtEg",
    descricao: "Miles Morales é catapultado através do Multiverso, onde encontra uma equipe de Pessoas-Aranha encarregadas de proteger sua própria existência."
  },
  {
    slug: "guardioes-da-galaxia-vol-3",
    nome: "Guardiões da Galáxia Vol. 3",
    categoria: "FAVORITO",
    ano: "2023",
    genero: "Ação / Aventura",
    duracao: "2h 30m",
    classificacao: "12+",
    imagem: "https://image.tmdb.org/t/p/w780/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA",
    descricao: "Nosso amado grupo de desajustados está se estabelecendo em Lugar Nenhum, mas suas vidas são viradas de cabeça para baixo pelo passado de Rocket."
  },
  {
    slug: "top-gun-maverick",
    nome: "Top Gun: Maverick",
    categoria: "EM ALTA",
    ano: "2022",
    genero: "Ação / Drama",
    duracao: "2h 11m",
    classificacao: "12+",
    imagem: "https://image.tmdb.org/t/p/w780/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    trailer: "https://www.youtube.com/watch?v=qSqVVswa420",
    descricao: "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete 'Maverick' Mitchell está de volta."
  },
  {
    slug: "oppenheimer",
    nome: "Oppenheimer",
    categoria: "DESTAQUE",
    ano: "2023",
    genero: "Drama / História",
    duracao: "3h 00m",
    classificacao: "16+",
    imagem: "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    descricao: "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da primeira bomba atômica."
  },
  {
    slug: "avatar-o-caminho-da-agua",
    nome: "Avatar: O Caminho da Água",
    categoria: "ESPECIAL",
    ano: "2022",
    genero: "Fantasia / Aventura",
    duracao: "3h 12m",
    classificacao: "12+",
    imagem: "https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylikes.mp4",
    trailer: "https://www.youtube.com/watch?v=d9MyW72ELq0",
    descricao: "Jake Sully e sua família exploram novas regiões de Pandora em uma aventura visualmente espetacular."
  },
  {
    slug: "john-wick-4",
    nome: "John Wick 4",
    categoria: "DESTAQUE",
    ano: "2023",
    genero: "Ação",
    duracao: "2h 49m",
    classificacao: "16+",
    imagem: "https://image.tmdb.org/t/p/w780/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    trailer: "https://www.youtube.com/watch?v=qEVUtrk8_B4",
    descricao: "John Wick enfrenta novos inimigos e luta por uma chance de conquistar sua liberdade."
  },
  {
    slug: "gladiador-2",
    nome: "Gladiador II",
    categoria: "RECOMENDADO",
    ano: "2024",
    genero: "Ação / Drama",
    duracao: "2h 28m",
    classificacao: "16+",
    imagem: "https://image.tmdb.org/t/p/w780/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    trailer: "https://www.youtube.com/watch?v=4rgIUyaeVhM",
    descricao: "Anos após testemunhar a morte de Maximus, Lucius é forçado a entrar no Coliseu após sua terra ser conquistada."
  },
  {
    slug: "deadpool-e-wolverine",
    nome: "Deadpool & Wolverine",
    categoria: "EM ALTA",
    ano: "2024",
    genero: "Ação / Comédia",
    duracao: "2h 07m",
    classificacao: "16+",
    imagem: "https://image.tmdb.org/t/p/w780/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    trailer: "https://www.youtube.com/watch?v=73_1biulkYk",
    descricao: "Deadpool e Wolverine se unem em uma aventura cheia de ação, humor e caos."
  },
  {
    slug: "a-origem",
    nome: "A Origem",
    categoria: "ESPECIAL",
    ano: "2010",
    genero: "Ficção científica",
    duracao: "2h 28m",
    classificacao: "14+",
    imagem: "https://image.tmdb.org/t/p/w780/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackTheSeeItAllWorld.mp4",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    descricao: "Um especialista em invadir sonhos recebe uma missão extremamente perigosa."
  }
];

// =========================
// UTILITÁRIOS
// =========================

function getParametroFilme() {
  return new URLSearchParams(window.location.search).get("filme");
}

function criarCardRecomendado(filme) {
  return `
    <a class="rec-card" href="filme.html?filme=${filme.slug}">
      <img src="${filme.imagem}" alt="${filme.nome}" loading="lazy">
      <div class="rec-info">
        <strong>${filme.nome}</strong>
        <span>${filme.ano} • ${filme.genero}</span>
      </div>
    </a>
  `;
}

// =========================
// INICIALIZAÇÃO
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const slug = getParametroFilme();
  
  // Busca o filme correspondente pelo slug ou mantém Interestelar se não achar
  const filme = filmes.find(f => f.slug === slug) || filmes[0];

  const img = document.getElementById("filmeImagem");
  const backdrop = document.getElementById("movieBackdrop");

  document.title = `${filme.nome} | PHZIN TV`;

  if (img) {
    img.src = filme.imagem;
    img.alt = filme.nome;

    if (backdrop) {
      img.addEventListener("load", () => {
        backdrop.style.backgroundImage = `url(${filme.imagem})`;
      });
    }
  }

  // Preenche dados do filme na tela
  document.getElementById("filmeCategoria").textContent = filme.categoria;
  document.getElementById("filmeNome").textContent = filme.nome;
  document.getElementById("filmeDescricao").textContent = filme.descricao;
  document.getElementById("ano").textContent = filme.ano;
  document.getElementById("genero").textContent = filme.genero;
  document.getElementById("duracao").textContent = filme.duracao;
  document.getElementById("classificacao").textContent = filme.classificacao;
  document.getElementById("trailerBtn").href = filme.trailer;

  // Atualiza e executa o Vídeo de Fundo (Loop)
  const videoElement = document.getElementById("movieVideo");
  const videoSource = document.getElementById("movieVideoSource");

  if (videoElement && videoSource && filme.video) {
    videoSource.src = filme.video;
    videoElement.load();
    videoElement.play().catch(err => {
      console.log("Autoplay aguardando interação do usuário:", err);
    });
  }

  // Recomendações (exclui o filme atual)
  const recomendados = filmes
    .filter(f => f.slug !== filme.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const recomendadosContainer = document.getElementById("recomendados");
  if (recomendadosContainer) {
    recomendadosContainer.innerHTML = recomendados.map(criarCardRecomendado).join("");
  }
});