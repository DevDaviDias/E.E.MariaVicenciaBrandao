// ====== CONTEÚDO (edite aqui) ======
// Postagens: da mais recente para a mais antiga. Só a PRIMEIRA aparece em "Últimas notícias"; todas aparecem na Linha do tempo. A com feira:true também alimenta o texto da página Projetos.
const postagens = [
  {titulo:"Raízes que ensinam: professores visitam o Museu Capixaba do Negro", data:"2026-11-20", tag:"Consciência Negra",
   texto:["No Dia da Consciência Negra, 20 de novembro, a Escola Estadual Maria Vicência Brandão compartilha com a comunidade uma experiência de formação vivida por seus professores: a visita pedagógica ao Museu Capixaba do Negro Verônica da Pas (MUCANE), em Vitória (ES). A viagem foi exclusiva para a equipe docente e teve como objetivo ampliar o repertório de quem está todos os dias em sala de aula.","Inaugurado em 5 de julho de 2012, o MUCANE preserva e celebra a memória da população negra do Espírito Santo. Os professores conheceram o acervo permanente, com painéis sobre Olga Maria Borges, Herminio Blackman, Balduino, o Africano, a Revolta de Queimado e Zé Francisco José, além de esculturas e do mural \"Gratia\". Também visitaram a exposição \"Turmalina\", mostra de fotografias de mulheres negras que retrata a religiosidade, a ancestralidade e a cultura afro-brasileira.","Conhecer essas histórias de perto fortalece o trabalho com a Lei 10.639/03, que torna obrigatório o ensino de história e cultura afro-brasileira e africana. Mais do que cumprir uma norma, trata-se de reconhecer que a história do Brasil e do Espírito Santo foi construída também por mulheres e homens negros, e de garantir que todos os estudantes se vejam representados no que aprendem.","A formação continuada é parte do nosso compromisso com uma educação antirracista, que acolhe, respeita e valoriza a diversidade. Levaremos o que vimos e aprendemos para os planejamentos, as aulas e os projetos da escola. Porque, como disse a exposição, o futuro tem raízes."],
   slides:[["img/mucane/slide-01.jpg", "Grupo de cerca de vinte professores e acompanhantes lado a lado, em frente à parede amarela da exposição \"Turmalina\", com fotografias emolduradas ao fundo."],["img/mucane/slide-02.jpg", "Seis professoras sorrindo em frente a uma parede colorida com logotipos e estampas; a professora da direita tira a selfie."],["img/mucane/slide-03.jpg", "Cinco professoras lado a lado diante de uma parede rosa com fotografias emolduradas."],["img/mucane/slide-04.jpg", "Seis professoras alinhadas diante de uma parede laranja com fotografias emolduradas."],["img/mucane/slide-05.jpg", "Professora em pé diante do grande mural rosa \"Gratia\", com o retrato de uma mulher negra que a olha de cima."],["img/mucane/slide-06.jpg", "Professora ao lado de uma escultura de santo negro com coroa, vestes escuras e um menino de branco nos braços."],["img/mucane/slide-07.jpg", "Professora de costas, com a mão no queixo, observando uma fileira de painéis históricos na parede do museu."],["img/mucane/slide-08.jpg", "Painel dedicado a Olga Maria Borges, com o retrato da educadora sorrindo e um texto biográfico."],["img/mucane/slide-09.jpg", "Escultura em tom terroso de uma mulher sentada, com uma vasilha de barro sobre as pernas."],["img/mucane/slide-10.jpg", "Duas fotografias emolduradas na parede amarela: uma de mãos em um ritual e outra de um altar iluminado por velas."],["img/mucane/slide-11.jpg", "Auditório do museu, com professores sentados em poltronas assistindo a uma palestra ao fundo da sala."],["img/mucane/slide-12.jpg", "Placa metálica de inauguração do Museu Capixaba do Negro (MUCANE), da Prefeitura de Vitória, datada de 5 de julho de 2012."]],
   slidesTitulo:"Veja como foi a visita",
  reportagem:true,
  hero:["img/mucane/galeria/turma-turmalina.jpg","Professores da escola reunidos em fila diante da parede amarela da exposição \"Turmalina\", com fotografias emolduradas ao fundo.","Equipe da E.E. Maria Vicência Brandão na exposição \"Turmalina\", no MUCANE."],
  galerias:[
   {titulo:"No acervo permanente", legenda:"Painéis que contam a trajetória de lideranças negras capixabas.", fotos:[["img/mucane/galeria/paineis-historicos.jpg","Professora observando uma fileira de painéis históricos com retratos e biografias, entre eles a Revolta de Queimado.","Painéis do acervo: Olga Maria Borges, Herminio Blackman, Balduino, o Africano, e a Revolta de Queimado."],["img/mucane/galeria/ze-beato.jpg","Painel biográfico de Zé Beato, com retrato e texto sobre o repórter e ativista.","Zé Beato (1951–1982): repórter atento às causas das minorias étnicas."]]},
   {titulo:"Exposição Turmalina", legenda:"Fotografias de mulheres negras que retratam fé, ancestralidade e cultura afro-brasileira.", fotos:[["img/mucane/galeria/retrato-mulher.jpg","Fotografia de uma mulher negra de colar colorido que olha para o alto, entre galhos floridos.","Retrato exposto em Turmalina."],["img/mucane/galeria/altar-velas.jpg","Duas fotografias emolduradas numa parede amarela mostrando um ritual com mesa de oferendas iluminada por velas.","Rituais e saberes registrados em imagens."],["img/mucane/galeria/mulheres-campo.jpg","Duas fotografias de mulheres negras sorrindo: uma com flor vermelha no cabelo e outra de chapéu, com uma enxada, na roça.","Mulheres da terra, de sorriso aberto."],["img/mucane/galeria/parede-azul.jpg","Parede azul-turquesa com fotografias emolduradas e o desenho de um olho com estrela amarela.","O olho com estrela, símbolo visual da mostra."]]}
  ],
  videoVertical:["img/mucane/visita-mucane.mp4","img/mucane/visita-mucane.jpg","Alguns momentos da visita, em movimento."],
  momento:["img/mucane/galeria/selfie-professores.jpg","Quatro integrantes da equipe sorrindo e fazendo sinal de positivo diante de uma parede rosa com fotografias.","Bom humor e muita troca ao longo do caminho."]},
  {titulo:"Dia do Diretor: um vídeo para celebrar e agradecer", data:"2026-11-13", tag:"Homenagem",
   texto:"Este vídeo foi elaborado especialmente em homenagem ao Dia dos Diretores, com o objetivo de demonstrar, de maneira divertida e descontraída, um pouco dos momentos vividos no ambiente escolar. Ao longo do vídeo, são apresentadas cenas engraçadas, brincadeiras e situações que arrancam risadas, mas que também representam o carinho, o respeito e a gratidão que temos por aqueles que fazem parte da nossa escola. Mais do que proporcionar diversão, o vídeo é uma forma de reconhecer a importância dos diretores, que estão sempre presentes, enfrentando desafios, orientando os alunos e contribuindo para que a escola seja um lugar cada vez melhor. Porque, por trás de cada escola, existem pessoas que fazem a diferença. E hoje é dia de celebrar e agradecer por tudo isso!",
   video:"https://youtu.be/oUQxmhg0YsU?si=2AfzGl-wP7vOcuZj" // cole aqui o link do YouTube (ex.: https://youtu.be/xxxx) ou o caminho de um arquivo (ex.: img/dia-do-diretor.mp4)
  },
  {titulo:"Alunos da escola se preparam para o Simave", data:"2026-10-23", tag:"Simave",
   texto:["Estudantes da nossa escola vão participar da avaliação do <strong>Simave</strong>, o sistema de avaliação da educação pública de Minas Gerais. A prova mostra como cada turma está aprendendo e ajuda a escola a planejar o que vem pela frente.",
          "Não é uma prova para “passar de ano”: é uma oportunidade de mostrar o que aprendemos e de ajudar a melhorar o ensino da nossa escola e da nossa região."],
   itens:[["Antes","Durma bem e faça uma boa refeição."],["Chegada","Venha no horário e de uniforme."],["Na prova","Leia com calma e responda todas as questões."],["Compromisso","Faça com seriedade e sem cola."]],
   alunos:ALUNOS_SIMAVE,
   nota:"Confira abaixo se o seu nome está na lista. Em caso de dúvida sobre data, horário ou sala, procure a secretaria.",
   notaTitulo:"Vamos juntos!"},
  {titulo:"Feira de Robótica do Ano de 2025", data:"2025-06-07", tag:"Robótica", feira:true, // feira:true = texto de abertura e fecho aparecem também na página Projetos
  
   texto:"A Feira de Robótica realizada no ano de 2025 foi um momento de aprendizado, criatividade e inovação. O evento teve como objetivo apresentar projetos desenvolvidos pelos alunos, mostrando como a tecnologia pode ser utilizada para facilitar tarefas do cotidiano e solucionar diferentes problemas.",
   carrosselTitulo:"Conheça os projetos da feira", // o carrossel (foto + descrição) é montado abaixo a partir de projetosTec
   fecho:"A feira proporcionou aos alunos a oportunidade de colocar em prática os conhecimentos adquiridos em sala de aula, desenvolver habilidades e compartilhar suas ideias com os visitantes. Foi uma experiência enriquecedora, que mostrou como a robótica pode estar presente em diferentes áreas da sociedade e como a criatividade dos estudantes pode se transformar em soluções inovadoras."}
];
// Projetos tecnológicos dos alunos (página Projetos). Cada projeto: nome, turma, foto e resumo.
// Para trocar a foto, coloque o arquivo em img/projetos/ e mude o campo img.
const projetosTec = [
  {nome:"Robô Misturador de Café", turma:"1º Ano EMTI", img:"img/projetos/robo-misturador-de-cafe.jpg",
   resumo:"O projeto consiste no desenvolvimento de um protótipo robótico para realizar a mistura do café durante o processo de colheita. A ideia surgiu para auxiliar os trabalhadores que atuam na colheita do café, oferecendo uma solução tecnológica para facilitar essa atividade. O projeto envolve conceitos de robótica, eletrônica e automação."},
  {nome:"Garagem Automática", turma:"1º Ano EMTI", img:"img/projetos/garagem-automatica.jpg",
   resumo:"O projeto apresenta um sistema de garagem automatizada, desenvolvido para controlar a abertura e o fechamento de um portão. Utilizando componentes eletrônicos e programação, a proposta demonstra como a automação pode proporcionar mais praticidade e segurança no cotidiano."},
  {nome:"Ponto Digital", turma:"3º Ano Regular", img:"img/projetos/ponto-digital.jpg",
   resumo:"O projeto consiste no desenvolvimento de um sistema digital de registro de ponto para os alunos da escola. A proposta busca facilitar o controle de horários e a organização da frequência escolar por meio da tecnologia, explorando conceitos de programação e desenvolvimento de sistemas."},
  {nome:"Numeris", turma:"3º Ano Regular", img:"img/projetos/numeris.jpg",
   resumo:"O projeto Numeris apresenta uma proposta tecnológica voltada ao trabalho com números e operações matemáticas. Por meio de recursos de programação e tecnologia, busca explorar o raciocínio lógico e tornar o aprendizado mais interativo."},
  {nome:"Lixeira com Separador Automático de Resíduos", turma:"2º Ano EMTI", img:"img/projetos/lixeira-separador-residuos.jpg",
   resumo:"O projeto consiste em uma lixeira inteligente capaz de realizar a separação automática de resíduos. A proposta utiliza recursos de automação e sensores para demonstrar como a tecnologia pode contribuir para a coleta seletiva, a sustentabilidade e a preservação do meio ambiente."},
  {nome:"Carrinho de Papelão", turma:"2º Ano EMTI", img:"img/projetos/carrinho-de-papelao.jpg",
   resumo:"O projeto apresenta a construção de um carrinho utilizando papelão e materiais acessíveis. A atividade explora conceitos de criatividade, sustentabilidade e construção de protótipos, mostrando como materiais reutilizáveis podem ser transformados em soluções criativas."},
  {nome:"Braço Robótico", turma:"1º Ano Regular", img:"img/projetos/braco-robotico.jpg",
   resumo:"O projeto consiste na construção de um braço robótico capaz de realizar movimentos semelhantes aos de um braço humano. A proposta trabalha conceitos de robótica, eletrônica e programação, demonstrando como mecanismos automatizados podem auxiliar na movimentação de objetos."},
  {nome:"Robô de Estacionamento", turma:"EJA – Noturno", img:"img/projetos/robo-de-estacionamento.jpg",
   resumo:"O projeto apresenta um protótipo robótico voltado à simulação de um sistema de estacionamento. A proposta busca explorar conceitos de automação, sensores e programação, demonstrando como a tecnologia pode auxiliar na organização e no controle de espaços de estacionamento."},
  {nome:"Porta Automática", turma:"1º e 2º Ano – Noturno", img:"img/projetos/porta-automatica.jpg",
   resumo:"O projeto consiste no desenvolvimento de um sistema de abertura e fechamento automático de uma porta. Por meio da utilização de sensores, componentes eletrônicos e programação, o protótipo demonstra aplicações da automação em ambientes residenciais e comerciais."},
  {nome:"Seguidor de Luz", turma:"3º Ano – Noturno", img:"img/projetos/seguidor-de-luz.jpg",
   resumo:"O projeto apresenta um robô capaz de identificar a direção de uma fonte luminosa e movimentar-se em sua direção. Utilizando sensores de luminosidade e programação, o protótipo demonstra conceitos de robótica, automação e interação com o ambiente."},
  {nome:"Irrigação Automática", turma:"2º Ano Regular – Turma 1", img:"img/projetos/irrigacao-automatica.jpg",
   resumo:"O projeto consiste em um sistema inteligente de irrigação que utiliza sensores para acompanhar a umidade do solo. Quando identifica a necessidade de água, o sistema pode acionar automaticamente a irrigação, contribuindo para o uso consciente da água e facilitando o cuidado com as plantas."},
  {nome:"Protótipo de Robô", turma:"1º Ano EMTI", img:"img/projetos/prototipo-de-robo.jpg",
   resumo:"O projeto consiste no desenvolvimento de um protótipo robótico voltado à segurança residencial. O robô possui movimento na cabeça e capacidade de registrar imagens do ambiente, acompanhando a movimentação das pessoas ao seu redor. A proposta busca demonstrar como a robótica e a tecnologia podem contribuir para o monitoramento e a segurança de ambientes residenciais."},
  {nome:"Casa Inteligente", turma:"1º Ano EMTI", img:"img/projetos/casa-inteligente.jpg",
   resumo:"O projeto apresenta um modelo de residência automatizada, utilizando recursos tecnológicos para simular o controle de diferentes funções da casa. A proposta explora conceitos de automação residencial, eletrônica e programação, demonstrando como a tecnologia pode proporcionar mais praticidade e eficiência no cotidiano."}
];
// Carrossel da Feira de Robótica (publicação da página inicial): foto, turma, nome e descrição de cada projeto
postagens.find(p => p.feira).carrossel = projetosTec.map(p => ({titulo:p.nome, texto:p.resumo, img:p.img, turma:p.turma}));
// Blog do EMTI (feed público do Blogger)
const BLOG = "https://eemariavicencia.blogspot.com/";
// Eventos (data no formato AAAA-MM-DD)
const eventos = [
  {data:"2026-10-30", nome:"Reunião de pais e mestres"},
  {data:"2026-11-12", nome:"Feira de ciências e tecnologia"},
  {data:"2026-11-20", nome:"Dia da Consciência Negra"}
];
// Games feitos pelos alunos (HTML, CSS, JS ou outras linguagens). Para incluir um jogo, copie um bloco e preencha.
// tecnologia: com o que foi feito, ex.: "HTML, CSS e JS", "Python", "Java"
// link: endereço para jogar (deixe "" se ainda não estiver no ar). capa: imagem opcional, ex.: "img/meu-jogo.jpg"
const games = [
  {titulo:"Nome do jogo", tecnologia:"HTML, CSS e JS", capa:"",
   texto:"Descreva aqui o jogo: como se joga e o que os alunos aprenderam fazendo.",
   autores:"nome dos alunos ou da turma", link:""}
];
// ===================================

const MESES = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const fmt = iso => { const [a,m,d] = iso.split("-"); return `${d}/${m}/${a}`; };
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// ===== Menu e rodapé (editar aqui vale para todas as páginas) =====
// barra:true = aparece no menu de baixo do celular (use no máximo 5)
const ICONES = {"inicio": "<path d=\"M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z\"/>", "eventos": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/>", "linha": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/>", "projetos": "<path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z\"/>", "games": "<rect x=\"2\" y=\"7\" width=\"20\" height=\"11\" rx=\"5\"/><path d=\"M7 10v5M4.5 12.5h5\"/><circle cx=\"16\" cy=\"11.5\" r=\".6\"/><circle cx=\"18.5\" cy=\"14\" r=\".6\"/>"};
const PAGINAS = [
  {id:"inicio",   href:"index.html",          nome:"Início",         barra:true},
  {id:"escola",   href:"escola.html",         nome:"A escola"},
  {id:"eventos",  href:"eventos.html",        nome:"Eventos",        barra:true},
  {id:"linha",    href:"linha-do-tempo.html", nome:"Linha do tempo", barra:true},
  {id:"projetos", href:"projetos.html",       nome:"Projetos",       barra:true},
  {id:"games",    href:"games.html",          nome:"Games",          barra:true},
  {id:"blog",     href:BLOG,                 nome:"Blog do EMTI",   externo:true}
];
(function layout(){
  const atual = document.body.dataset.pagina;
  const cls = p => p.id === atual ? ' class="ativo" aria-current="page"' : "";
  const topo = document.createElement("header");
  topo.className = "topo";
  topo.innerHTML = `<a class="marca" href="index.html"><img class="marca-logo" src="img/logo.png" alt="Brasão da E.E. Maria Vicência Brandão"><span class="marca-nome">E.E. Maria Vicência Brandão<small>Padre Fialho · MG</small></span></a>
    <nav class="menu" aria-label="Principal">${PAGINAS.map(p => p.externo ? `<a href="${p.href}" target="_blank" rel="noopener">${p.nome} ↗</a>` : `<a href="${p.href}"${cls(p)}>${p.nome}</a>`).join("")}</nav>`;
  document.body.prepend(topo);
  const rod = document.createElement("footer");
  rod.className = "rodape";
  rod.innerHTML = `<img class="rodape-logo" src="img/logo.png" alt=""><p class="nome-script">Maria Vicência Brandão</p><p><strong>Escola Estadual</strong></p><p class="lema">Educar para transformar. Ensinar para a vida.</p><p>Padre Fialho · SRE Manhuaçu · Minas Gerais</p>`;
  document.body.append(rod);
  const barra = document.createElement("nav");
  barra.className = "barra";
  barra.setAttribute("aria-label", "Navegação");
  barra.innerHTML = PAGINAS.filter(p => p.barra).map(p => `<a href="${p.href}"${cls(p)}><span class="barra-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONES[p.id]}</svg></span><span>${p.nome}</span></a>`).join("");
  document.body.append(barra);
})();

// Corpo completo de uma postagem (usado em "Últimas notícias" e ao expandir na Linha do tempo)
function corpoPost(p, comAlunos) {
  const textos = [].concat(p.texto);
  const paras = `<div class="post-texto${textos.length > 1 ? " duas" : ""}">${textos.map(t => `<p>${t}</p>`).join("")}</div>`;
  const itens = p.itens ? `<ul class="post-lista">${p.itens.map(([a,b]) => `<li><b>${a}</b>${b}</li>`).join("")}</ul>` : "";
  const nota = p.nota ? `<div class="post-nota"><span class="script">${p.notaTitulo || ""}</span> ${p.nota}</div>` : "";
  const lista = comAlunos && p.alunos ? [...p.alunos].sort((a,b) => a.localeCompare(b,"pt-BR")) : null;
  const alunos = lista ? `<details class="alunos" open><summary>Alunos que farão o Simave <b>${lista.length}</b></summary><div class="alunos-busca"><input type="search" id="buscaAluno" placeholder="Buscar seu nome…" aria-label="Buscar aluno pelo nome" autocomplete="off"><small id="buscaInfo">${lista.length} nomes</small></div><ul id="listaAlunos">${lista.map(n => `<li>${n}</li>`).join("")}</ul></details>` : "";
  let video = "";
  if (p.video) {
    const yt = p.video.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    video = `<div class="post-video">${yt ? `<iframe src="https://www.youtube.com/embed/${yt[1]}" title="${esc(p.titulo)}" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>` : `<video src="${esc(p.video)}" controls playsinline preload="metadata"></video>`}</div>`;
  }
  const carr = p.carrossel ? `${p.carrosselTitulo ? `<h3 class="carr-titulo">${p.carrosselTitulo}</h3>` : ""}<div class="carr"><div class="carr-trilho" tabindex="0" aria-label="Projetos da feira">${p.carrossel.map((c,i) => `<article class="carr-slide${c.img ? " tem-foto" : ""}"><span class="carr-num">${i+1}</span>${c.img ? `<img src="${esc(c.img)}" alt="Fotografia do projeto ${esc(c.titulo)}${c.turma ? `, da turma ${esc(c.turma)}` : ""}" width="960" height="1280" loading="${i < 2 ? "eager" : "lazy"}">` : ""}<div class="carr-txt">${c.turma ? `<span class="carr-turma">${c.turma}</span>` : ""}<h4>${c.titulo}</h4><p>${c.texto}</p></div></article>`).join("")}</div><div class="carr-nav"><button type="button" data-d="-1" aria-label="Projeto anterior">&#9664;</button><span class="carr-pos">1 / ${p.carrossel.length}</span><button type="button" data-d="1" aria-label="Próximo projeto">&#9654;</button></div></div>` : "";
  const slides = p.slides ? `${p.slidesTitulo ? `<h3 class="carr-titulo">${p.slidesTitulo}</h3>` : ""}<div class="carr"><div class="carr-trilho" tabindex="0" aria-label="Fotos da visita">${p.slides.map(([src,alt],i) => `<article class="carr-slide so-img"><img src="${esc(src)}" alt="${esc(alt)}" width="1080" height="1350" loading="${i < 2 ? "eager" : "lazy"}"></article>`).join("")}</div><div class="carr-nav"><button type="button" data-d="-1" aria-label="Foto anterior">&#9664;</button><span class="carr-pos">1 / ${p.slides.length}</span><button type="button" data-d="1" aria-label="Próxima foto">&#9654;</button></div></div>` : "";
  const fecho = p.fecho ? `<div class="post-texto post-fecho"><p>${p.fecho}</p></div>` : "";
  if (p.reportagem) return corpoReportagem(p, textos, slides, fecho, nota, comAlunos);
  return `<div class="linha-topo"><span class="tag">${p.tag}</span><time datetime="${p.data}">${fmt(p.data)}</time></div><h2>${p.titulo}</h2>${p.video ? `<div class="post-duo">${paras}${video}</div>` : paras}${carr}${slides}${fecho}${itens}${nota}${alunos}`;
}


// Publicação em formato de reportagem: título e texto centralizados, foto de abertura, galerias e vídeo entre os parágrafos
function corpoReportagem(p, textos, slides, fecho, nota, completo) {
  if (!completo) return `${p.videoVertical ? videoRep(p.videoVertical) : ""}${slides}`;
  const fig = ([src,alt,leg], cls="") => `<figure class="rep-fig ${cls}"><button type="button" class="rep-zoom" data-zoom="${esc(src)}" data-alt="${esc(alt)}" aria-label="Ampliar foto: ${esc(alt)}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></button>${leg ? `<figcaption>${leg}</figcaption>` : ""}</figure>`;
  const gal = g => `<section class="rep-galeria"><h3>${g.titulo}</h3><p class="rep-leg">${g.legenda}</p><div class="rep-grade n${g.fotos.length}">${g.fotos.map(f => fig(f)).join("")}</div></section>`;
  const [lead, ...resto] = textos;
  return `<div class="rep"><header class="rep-topo"><div class="linha-topo"><span class="tag">${p.tag}</span><time datetime="${p.data}">${fmt(p.data)}</time></div><h2>${p.titulo}</h2></header>
  ${p.hero ? fig(p.hero, "rep-hero") : ""}
  <div class="rep-texto"><p class="rep-lead">${lead}</p>${resto.slice(0,1).map(t => `<p>${t}</p>`).join("")}</div>
  ${(p.galerias||[]).map(gal).join("")}
  <div class="rep-texto">${resto.slice(1,-1).map(t => `<p>${t}</p>`).join("")}</div>
  ${p.videoVertical ? videoRep(p.videoVertical) : ""}
  <div class="rep-texto">${resto.slice(-1).map(t => `<p class="rep-final">${t}</p>`).join("")}</div>
  ${p.momento ? fig(p.momento, "rep-momento") : ""}
  ${slides}${nota}</div>`;
}
function videoRep([src,poster,leg]) { return `<figure class="rep-video"><video src="${esc(src)}" poster="${esc(poster)}" controls playsinline preload="metadata"></video><figcaption>${leg}</figcaption></figure>`; }

// Últimas notícias: começa na mais recente; os botões ◀ ▶ passam pelas postagens
if ($("post")) {
  let atual = 0;
  const mostra = i => {
    atual = i;
    $("post").innerHTML = corpoPost(postagens[i], true);
    $("post").style.animation = "none"; void $("post").offsetWidth; $("post").style.animation = "";
    $("btnRecente").disabled = i === 0;
    $("btnAntiga").disabled = i === postagens.length - 1;
    const busca = $("buscaAluno");
    if (busca) {
      const norm = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
      const lis = [...document.querySelectorAll("#listaAlunos li")];
      busca.oninput = () => {
        const q = norm(busca.value.trim()); let n = 0;
        lis.forEach(li => { const ok = norm(li.textContent).includes(q); li.hidden = !ok; if(ok) n++; });
        $("buscaInfo").textContent = q ? `Mostrando ${n} de ${lis.length} nomes` : `${lis.length} nomes`;
      };
    }
  };
  $("btnRecente").onclick = () => mostra(atual - 1);
  $("btnAntiga").onclick = () => mostra(atual + 1);
  mostra(0);
}

// Linha do tempo (todas as postagens; as que têm carrossel abrem completas ao clicar)
if ($("linha")) $("linha").innerHTML = postagens.map(p =>
  `<li><time datetime="${p.data}">${fmt(p.data)}</time><h3>${p.titulo}</h3><p>${[].concat(p.texto)[0].replace(/<[^>]+>/g,"")}</p>${p.carrossel || p.slides ? `<details class="mais"><summary>Ver publicação completa</summary><div class="mais-corpo">${corpoPost(p, false)}</div></details>` : ""}</li>`).join("");

// Carrossel: botões e contador (funciona em qualquer carrossel da página)
document.addEventListener("click", e => {
  const bt = e.target.closest(".carr-nav button"); if (!bt) return;
  const tr = bt.closest(".carr").querySelector(".carr-trilho");
  tr.scrollBy({left: +bt.dataset.d * tr.clientWidth, behavior: "smooth"});
});
document.addEventListener("scroll", e => {
  const tr = e.target; if (!tr.classList || !tr.classList.contains("carr-trilho")) return;
  const n = tr.children.length, i = Math.min(n, Math.round(tr.scrollLeft / tr.clientWidth) + 1);
  tr.parentNode.querySelector(".carr-pos").textContent = `${i} / ${n}`;
}, true);

// Projetos: publicação da Feira de Robótica (ano passado) em volta da galeria
if ($("feiraTxt")) {
  const f = postagens.find(p => p.feira);
  $("feiraTxt").innerHTML = `<span class="pt-turma">Publicação anterior · <time datetime="${f.data}">${fmt(f.data)}</time></span><h2>${f.titulo}</h2><p>${[].concat(f.texto)[0]}</p><h3>Conheça os ${projetosTec.length} projetos</h3><small>Toque ou clique na foto para ampliar.</small>`;
  if ($("feiraFecho")) $("feiraFecho").innerHTML = `<p>${f.fecho}</p>`;
}

// Projetos tecnológicos: grade de cards (um card por projeto) com foto ampliável
if ($("projTec")) {
  const lupa = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>';
  $("projTec").innerHTML = projetosTec.map((p,i) => `<article class="pt-card reveal"><figure class="pt-foto"><button type="button" data-i="${i}" aria-label="Ampliar foto do projeto ${esc(p.nome)}"><img src="${esc(p.img)}" alt="Fotografia do projeto ${esc(p.nome)}, da turma ${esc(p.turma)}" width="960" height="1280" loading="${i < 3 ? "eager" : "lazy"}"></button><span class="pt-num">${String(i+1).padStart(2,"0")}</span><span class="pt-zoom">${lupa}</span></figure><div class="pt-corpo"><span class="pt-turma">${p.turma}</span><h3>${p.nome}</h3><p>${p.resumo}</p></div></article>`).join("");
  const lb = $("ptLb");
  $("projTec").addEventListener("click", e => {
    const b = e.target.closest("button[data-i]"); if (!b || !lb.showModal) return;
    const p = projetosTec[+b.dataset.i];
    $("ptLbImg").src = p.img; $("ptLbImg").alt = `Fotografia do projeto ${p.nome}`;
    $("ptLbTxt").textContent = `${p.nome} · ${p.turma}`;
    lb.showModal();
  });
  $("ptLbX").onclick = () => lb.close();
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
}

// Eventos
if ($("listaEventos")) $("listaEventos").innerHTML = eventos.map(e => {
  const [a,m,d] = e.data.split("-");
  return `<li><div class="ev-data"><b>${d}</b><small>${MESES[+m-1].slice(0,3)}</small></div><span>${e.nome}</span></li>`;
}).join("");

// Calendário
if ($("cal")) {
  const hoje = new Date();
  let mes = hoje.getMonth(), ano = hoje.getFullYear();
  const calendario = () => {
    $("mesTitulo").textContent = `${MESES[mes]} de ${ano}`;
    const primeiro = new Date(ano, mes, 1).getDay();
    const dias = new Date(ano, mes+1, 0).getDate();
    let h = ["D","S","T","Q","Q","S","S"].map(s => `<div class="sem">${s}</div>`).join("");
    h += '<div class="vazio"></div>'.repeat(primeiro);
    for (let d=1; d<=dias; d++) {
      const iso = `${ano}-${String(mes+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
      const ev = eventos.find(e => e.data === iso);
      const cls = [ev ? "evento" : "", d===hoje.getDate() && mes===hoje.getMonth() && ano===hoje.getFullYear() ? "hoje" : ""].join(" ");
      h += `<div class="${cls}" ${ev ? `title="${esc(ev.nome)}"` : ""}>${d}</div>`;
    }
    $("cal").innerHTML = h;
  };
  $("mesAnt").onclick = () => { mes--; if(mes<0){mes=11;ano--;} calendario(); };
  $("mesProx").onclick = () => { mes++; if(mes>11){mes=0;ano++;} calendario(); };
  calendario();
}

// Games dos alunos
if ($("listaGames")) {
  const ICONE_GAME = '<svg viewBox="0 0 64 40" aria-hidden="true"><path d="M16 4h32c7 0 10 5 12 14l2 12c1 5-2 8-6 8-3 0-5-2-7-5l-3-4H18l-3 4c-2 3-4 5-7 5-4 0-7-3-6-8l2-12C6 9 9 4 16 4z" fill="currentColor"/><path d="M18 14v8M14 18h8" stroke="#1c2a5e" stroke-width="3" stroke-linecap="round"/><circle cx="43" cy="15" r="2.6" fill="#1c2a5e"/><circle cx="49" cy="21" r="2.6" fill="#1c2a5e"/></svg>';
  $("listaGames").innerHTML = games.map(g => `
    <article class="game">
      <div class="game-topo"${g.capa ? ` style="background-image:linear-gradient(180deg,rgba(15,24,56,.1),rgba(15,24,56,.75)),url('${esc(g.capa)}')"` : ""}>
        ${g.capa ? "" : ICONE_GAME}<span class="tag">${esc(g.tecnologia)}</span>
      </div>
      <div class="game-corpo">
        <h3>${esc(g.titulo)}</h3>
        <p>${esc(g.texto)}</p>
        <p class="game-autores">Feito por ${esc(g.autores)}</p>
        ${g.link ? `<a class="botao" href="${esc(g.link)}" target="_blank" rel="noopener">Jogar agora</a>` : `<span class="game-breve">Em breve</span>`}
      </div>
    </article>`).join("") + `
    <article class="game game-novo"><div class="game-corpo"><span class="script">seu jogo aqui</span><h3>Criou um jogo?</h3><p>Fale com seu professor de programação para o jogo da sua equipe aparecer nesta página.</p></div></article>`;
}

// Blog do EMTI: últimas 3 publicações pelo feed do Blogger
if ($("blogLista")) {
  const box = $("blogLista");
  let ok = false;
  const falha = () => { if(!ok){ ok = true; box.innerHTML = `<p class="blog-vazio">Não foi possível carregar as publicações agora. <a href="${BLOG}" target="_blank" rel="noopener">Acesse o blog do EMTI ↗</a></p>`; } };
  window.blogCb = d => {
    if (ok) return; ok = true;
    const es = (d.feed && d.feed.entry) || [];
    if (!es.length) { box.innerHTML = `<p class="blog-vazio">Ainda não há publicações no blog.</p>`; return; }
    box.innerHTML = es.map(e => {
      const link = (e.link.find(l => l.rel === "alternate") || {}).href || BLOG;
      const img = e["media$thumbnail"] ? e["media$thumbnail"].url.replace(/\/s\d+(-c)?\//, "/w640-h360-c/") : "";
      const cat = e.category && e.category[0] ? e.category[0].term : "";
      const data = new Date(e.published.$t).toLocaleDateString("pt-BR");
      return `<a class="blog-card" href="${esc(link)}" target="_blank" rel="noopener">${img ? `<img src="${esc(img)}" alt="" loading="lazy">` : `<div class="blog-sem-img"></div>`}<div class="blog-corpo">${cat ? `<span class="tag">${esc(cat)}</span>` : ""}<h3>${esc(e.title.$t)}</h3><time>${data}</time></div></a>`;
    }).join("");
  };
  const s = document.createElement("script");
  s.src = `${BLOG}feeds/posts/default?alt=json-in-script&max-results=3&callback=blogCb`;
  s.onerror = falha;
  document.head.append(s);
  setTimeout(falha, 8000);
}

// Aparece ao rolar
const rev = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add("visivel"); rev.unobserve(e.target); } }), {threshold:.08});
document.querySelectorAll(".reveal").forEach(el => rev.observe(el));


// Ampliar fotos das reportagens
document.addEventListener("click", e => {
  const b = e.target.closest(".rep-zoom"); if (!b) return;
  let d = document.getElementById("lightbox");
  if (!d) {
    d = document.createElement("dialog"); d.id = "lightbox"; d.className = "lightbox";
    d.innerHTML = `<button type="button" class="lb-fechar" aria-label="Fechar">&times;</button><img alt="">`;
    d.addEventListener("click", ev => { if (ev.target !== d.querySelector("img")) d.close(); });
    document.body.append(d);
  }
  const im = d.querySelector("img"); im.src = b.dataset.zoom; im.alt = b.dataset.alt || "";
  d.showModal();
});
