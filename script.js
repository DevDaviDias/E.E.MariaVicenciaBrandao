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
// ===================================

const MESES = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const fmt = iso => { const [a,m,d] = iso.split("-"); return `${d}/${m}/${a}`; };

// Últimas notícias: mostra somente a postagem mais recente (a primeira da lista)
const post = document.getElementById("post");
{
  const p = postagens[0];
  const paras = [].concat(p.texto).map(t => `<p>${t}</p>`).join("");
  const itens = p.itens ? `<ul class="post-lista">${p.itens.map(([a,b]) => `<li><b>${a}</b>${b}</li>`).join("")}</ul>` : "";
  const nota = p.nota ? `<div class="post-nota"><span class="script">${p.notaTitulo || ""}</span> ${p.nota}</div>` : "";
  const lista = p.alunos ? [...p.alunos].sort((a,b) => a.localeCompare(b,"pt-BR")) : null;
  const alunos = lista ? `<details class="alunos" open><summary>Alunos que farão o Simave <b>${lista.length}</b></summary><div class="alunos-busca"><input type="search" id="buscaAluno" placeholder="Buscar seu nome…" aria-label="Buscar aluno pelo nome" autocomplete="off"><small id="buscaInfo">${lista.length} nomes</small></div><ul id="listaAlunos">${lista.map(n => `<li>${n}</li>`).join("")}</ul></details>` : "";
  post.innerHTML = `<div class="linha-topo"><span class="tag">${p.tag}</span><time datetime="${p.data}">${fmt(p.data)}</time></div><h2>${p.titulo}</h2>${paras}${itens}${nota}${alunos}`;
  const busca = document.getElementById("buscaAluno");
  if(busca){
    const norm = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
    const lis = [...document.querySelectorAll("#listaAlunos li")];
    busca.oninput = () => {
      const q = norm(busca.value.trim()); let n = 0;
      lis.forEach(li => { const ok = norm(li.textContent).includes(q); li.hidden = !ok; if(ok) n++; });
      document.getElementById("buscaInfo").textContent = q ? `Mostrando ${n} de ${lis.length} nomes` : `${lis.length} nomes`;
    };
  }
}
// Linha do tempo (todas as postagens, da mais recente para a mais antiga)
document.getElementById("linha").innerHTML = postagens.map(p =>
  `<li><time datetime="${p.data}">${fmt(p.data)}</time><h3>${p.titulo}</h3><p>${[].concat(p.texto)[0].replace(/<[^>]+>/g,"")}</p></li>`).join("");

// Lista de eventos
document.getElementById("listaEventos").innerHTML = eventos.map(e => {
  const [a,m,d] = e.data.split("-");
  return `<li><div class="ev-data"><b>${d}</b><small>${MESES[+m-1].slice(0,3)}</small></div><span>${e.nome}</span></li>`;
}).join("");

// Calendário
const hoje = new Date();
let mes = hoje.getMonth(), ano = hoje.getFullYear();
function calendario(){
  document.getElementById("mesTitulo").textContent = `${MESES[mes]} de ${ano}`;
  const primeiro = new Date(ano, mes, 1).getDay();
  const dias = new Date(ano, mes+1, 0).getDate();
  let h = ["D","S","T","Q","Q","S","S"].map(s => `<div class="sem">${s}</div>`).join("");
  h += '<div class="vazio"></div>'.repeat(primeiro);
  for(let d=1; d<=dias; d++){
    const iso = `${ano}-${String(mes+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const ev = eventos.find(e => e.data === iso);
    const cls = [ev ? "evento" : "", d===hoje.getDate() && mes===hoje.getMonth() && ano===hoje.getFullYear() ? "hoje" : ""].join(" ");
    h += `<div class="${cls}" ${ev ? `title="${ev.nome}"` : ""}>${d}</div>`;
  }
  document.getElementById("cal").innerHTML = h;
}
document.getElementById("mesAnt").onclick = () => { mes--; if(mes<0){mes=11;ano--;} calendario(); };
document.getElementById("mesProx").onclick = () => { mes++; if(mes>11){mes=0;ano++;} calendario(); };
calendario();

// Menu no celular (ativa o item da seção visível)
const menu = document.getElementById("menu"), menuBtn = document.getElementById("menuBtn");
menuBtn.onclick = () => menuBtn.setAttribute("aria-expanded", menu.classList.toggle("aberto"));
menu.querySelectorAll("a").forEach(a => a.onclick = () => { menu.classList.remove("aberto"); menuBtn.setAttribute("aria-expanded","false"); });

// Destaca no menu a seção que está na tela
const links = [...menu.querySelectorAll("a")];
const obs = new IntersectionObserver(es => es.forEach(e => {
  if(e.isIntersecting) links.forEach(a => a.classList.toggle("ativo", a.getAttribute("href") === "#" + e.target.id));
}), {rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main section[id]").forEach(s => obs.observe(s));

// Aparece ao rolar
const rev = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add("visivel"); rev.unobserve(e.target); } }), {threshold:.08});
document.querySelectorAll(".reveal").forEach(el => rev.observe(el));
