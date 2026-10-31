// ====== CONTEÚDO (edite aqui) ======
// Postagens: da mais recente para a mais antiga. Só a PRIMEIRA aparece em "Últimas notícias"; todas aparecem na Linha do tempo.
const postagens = [
  {titulo:"Alunos da escola se preparam para o Simave", data:"2026-10-23", tag:"Simave",
   texto:["Estudantes da nossa escola vão participar da avaliação do <strong>Simave</strong>, o sistema de avaliação da educação pública de Minas Gerais. A prova mostra como cada turma está aprendendo e ajuda a escola a planejar o que vem pela frente.",
          "Não é uma prova para “passar de ano”: é uma oportunidade de mostrar o que aprendemos e de ajudar a melhorar o ensino da nossa escola e da nossa região."],
   itens:[["Antes","Durma bem e faça uma boa refeição."],["Chegada","Venha no horário e de uniforme."],["Na prova","Leia com calma e responda todas as questões."],["Compromisso","Faça com seriedade e sem cola."]],
   alunos:ALUNOS_SIMAVE,
   nota:"Confira abaixo se o seu nome está na lista. Em caso de dúvida sobre data, horário ou sala, procure a secretaria.",
   notaTitulo:"Vamos juntos!"},
  {titulo:"Projeto de irrigação inteligente é premiado", data:"2026-10-09", tag:"Robótica",
   texto:"Os alunos do EMTI apresentaram um sistema de irrigação automática e foram os vencedores da feira da escola."},
  {titulo:"Atividade de Tinkercad no laboratório", data:"2026-10-02", tag:"Informática",
   texto:"As turmas do 2º ano montaram juntas um circuito com Arduino e LEDs no simulador."},
  {titulo:"Boas-vindas ao novo trimestre", data:"2026-09-15", tag:"Aviso",
   texto:"Confira o calendário e os horários atualizados de cada turma."}
];
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
  {id:"games",    href:"games.html",          nome:"Games",          barra:true}
];
(function layout(){
  const atual = document.body.dataset.pagina;
  const cls = p => p.id === atual ? ' class="ativo" aria-current="page"' : "";
  const topo = document.createElement("header");
  topo.className = "topo";
  topo.innerHTML = `<a class="marca" href="index.html"><img class="marca-logo" src="img/logo.png" alt="Brasão da E.E. Maria Vicência Brandão"><span class="marca-nome">E.E. Maria Vicência Brandão<small>Padre Fialho · MG</small></span></a>
    <nav class="menu" aria-label="Principal">${PAGINAS.map(p => `<a href="${p.href}"${cls(p)}>${p.nome}</a>`).join("")}</nav>`;
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

// Últimas notícias (somente a primeira postagem da lista)
if ($("post")) {
  const p = postagens[0];
  const paras = [].concat(p.texto).map(t => `<p>${t}</p>`).join("");
  const itens = p.itens ? `<ul class="post-lista">${p.itens.map(([a,b]) => `<li><b>${a}</b>${b}</li>`).join("")}</ul>` : "";
  const nota = p.nota ? `<div class="post-nota"><span class="script">${p.notaTitulo || ""}</span> ${p.nota}</div>` : "";
  const lista = p.alunos ? [...p.alunos].sort((a,b) => a.localeCompare(b,"pt-BR")) : null;
  const alunos = lista ? `<details class="alunos" open><summary>Alunos que farão o Simave <b>${lista.length}</b></summary><div class="alunos-busca"><input type="search" id="buscaAluno" placeholder="Buscar seu nome…" aria-label="Buscar aluno pelo nome" autocomplete="off"><small id="buscaInfo">${lista.length} nomes</small></div><ul id="listaAlunos">${lista.map(n => `<li>${n}</li>`).join("")}</ul></details>` : "";
  $("post").innerHTML = `<div class="linha-topo"><span class="tag">${p.tag}</span><time datetime="${p.data}">${fmt(p.data)}</time></div><h2>${p.titulo}</h2>${paras}${itens}${nota}${alunos}`;
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
}

// Linha do tempo (todas as postagens)
if ($("linha")) $("linha").innerHTML = postagens.map(p =>
  `<li><time datetime="${p.data}">${fmt(p.data)}</time><h3>${p.titulo}</h3><p>${[].concat(p.texto)[0].replace(/<[^>]+>/g,"")}</p></li>`).join("");

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

// Aparece ao rolar
const rev = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add("visivel"); rev.unobserve(e.target); } }), {threshold:.08});
document.querySelectorAll(".reveal").forEach(el => rev.observe(el));
