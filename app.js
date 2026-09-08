/* ===== Genesis Consulting — Diagnóstico de Maturidade em IA ===== */
/* Copy e estrutura conforme documento aprovado. Não alterar textos. */

'use strict';

/* ---------- Dados ---------- */

var QUESTIONS = [
  {
    category: 'USO ATUAL',
    text: '1. Como a IA é usada hoje na sua empresa?',
    options: [
      { letter: 'A', text: 'Cada pessoa usa como quiser, sem nenhum padrão.', points: 1 },
      { letter: 'B', text: 'Times específicos adotaram ferramentas próprias, mas isoladas.', points: 4 },
      { letter: 'C', text: 'Existem ferramentas homologadas, mas nem todo processo usa.', points: 7 },
      { letter: 'D', text: 'IA está incorporada aos processos centrais de decisão e operação.', points: 10 }
    ]
  },
  {
    category: 'ABRANGÊNCIA',
    text: '2. Em quantas áreas da empresa a IA já está em uso, mesmo que informalmente?',
    options: [
      { letter: 'A', text: 'Só uma ou duas pessoas usam, isoladamente.', points: 1 },
      { letter: 'B', text: 'Uma ou duas áreas testam algo.', points: 4 },
      { letter: 'C', text: 'A maioria das áreas já usa de alguma forma, sem coordenação.', points: 7 },
      { letter: 'D', text: 'Uso disseminado, com coordenação entre áreas.', points: 10 }
    ]
  },
  {
    category: 'RESPONSÁVEL',
    text: '3. Existe um responsável único, nomeado, pela governança de IA na empresa?',
    options: [
      { letter: 'A', text: 'Não, ninguém cuida disso formalmente.', points: 1 },
      { letter: 'B', text: 'Já foi discutido, mas ninguém assumiu ainda.', points: 4 },
      { letter: 'C', text: 'Existe um responsável informal, sem tempo dedicado.', points: 7 },
      { letter: 'D', text: 'Sim, com responsabilidade e tempo dedicados.', points: 10 }
    ]
  },
  {
    category: 'DADOS',
    text: '4. Os dados usados pela IA hoje vêm de uma fonte confiável e única, ou de lugares diferentes?',
    options: [
      { letter: 'A', text: 'Não sei dizer com segurança.', points: 1 },
      { letter: 'B', text: 'Vêm de várias fontes, com divergências conhecidas.', points: 4 },
      { letter: 'C', text: 'Existe uma fonte principal, mas ainda há exceções.', points: 7 },
      { letter: 'D', text: 'Fonte única, confiável e auditável.', points: 10 }
    ]
  },
  {
    category: 'PILOTOS',
    text: '5. Quantos projetos ou pilotos de IA a empresa já começou e não seguiu adiante?',
    options: [
      { letter: 'A', text: 'Não sei dizer, ou perdemos a conta.', points: 1 },
      { letter: 'B', text: 'Dois ou mais pararam sem justificativa clara.', points: 4 },
      { letter: 'C', text: 'Um ou dois pararam, mas por motivo identificado.', points: 7 },
      { letter: 'D', text: 'Praticamente todos avançam, ou são encerrados com aprendizado registrado.', points: 10 }
    ]
  },
  {
    category: 'PRIORIZAÇÃO',
    text: '6. Como a empresa decide onde aplicar IA primeiro?',
    options: [
      { letter: 'A', text: 'Pelo que está na moda ou pelo que os concorrentes fazem.', points: 1 },
      { letter: 'B', text: 'Pelo que a diretoria pede no momento.', points: 4 },
      { letter: 'C', text: 'Por potencial percebido de impacto, sem processo formal.', points: 7 },
      { letter: 'D', text: 'Por um gargalo real da operação, identificado com dados.', points: 10 }
    ]
  },
  {
    category: 'OBJETIVO E MÉTRICA',
    text: '7. Antes de começar um piloto de IA, existe uma métrica de sucesso definida?',
    options: [
      { letter: 'A', text: 'Quase nunca.', points: 1 },
      { letter: 'B', text: 'Às vezes, de forma informal.', points: 4 },
      { letter: 'C', text: 'Na maioria das vezes, mas nem sempre é seguida.', points: 7 },
      { letter: 'D', text: 'Sempre, antes de qualquer investimento.', points: 10 }
    ]
  },
  {
    category: 'ACOMPANHAMENTO',
    text: '8. Com que frequência os resultados dos projetos de IA são revisados pela liderança?',
    options: [
      { letter: 'A', text: 'Nunca revisamos formalmente.', points: 1 },
      { letter: 'B', text: 'Raramente, só quando alguém pergunta.', points: 4 },
      { letter: 'C', text: 'Trimestralmente, ou quando há tempo.', points: 7 },
      { letter: 'D', text: 'Em cadência regular, com responsável e critério claros.', points: 10 }
    ]
  },
  {
    category: 'PERCEPÇÃO DE ROI',
    text: '9. Você consegue mensurar o ROI da IA na sua operação?',
    options: [
      { letter: 'A', text: 'Não, nenhum.', points: 1 },
      { letter: 'B', text: 'Tenho uma ideia, mas não é um número confiável.', points: 4 },
      { letter: 'C', text: 'Sim, para um projeto específico.', points: 7 },
      { letter: 'D', text: 'Sim, para a maioria dos projetos relevantes.', points: 10 }
    ]
  },
  {
    category: 'EFICIÊNCIA MENSURADA',
    text: '10. Você sabe dizer, em %, quanto a IA já tornou sua equipe mais eficiente?',
    options: [
      { letter: 'A', text: 'Não, não temos nenhuma estimativa.', points: 1 },
      { letter: 'B', text: 'Tenho uma sensação, mas não baseada em dado.', points: 4 },
      { letter: 'C', text: 'Temos uma estimativa aproximada, para uma área específica.', points: 7 },
      { letter: 'D', text: 'Sim, medimos com precisão em pelo menos um processo.', points: 10 }
    ]
  },
  {
    category: 'GOVERNANÇA',
    text: '11. Existe uma política formal sobre o que pode e o que não pode ser feito com IA na empresa?',
    options: [
      { letter: 'A', text: 'Não existe nada escrito.', points: 1 },
      { letter: 'B', text: 'Existe uma orientação informal, boca a boca.', points: 4 },
      { letter: 'C', text: 'Existe uma política, mas pouca gente conhece.', points: 7 },
      { letter: 'D', text: 'Existe, é conhecida e revisada periodicamente.', points: 10 }
    ]
  }
];

var LEVELS = [
  {
    name: 'Experimentação',
    range: '0 – 34 pontos',
    min: 0,
    max: 34,
    description: 'Ferramentas isoladas, adoção individual, sem métrica de negócio associada, é o retrato de quase toda empresa nesse momento. A boa notícia: os primeiros ajustes aqui costumam ter o maior impacto.',
    recommendations: [
      'Nomeie um responsável único pela governança de IA, mesmo que provisório.',
      'Mapeie, antes de qualquer nova ferramenta, quais já estão em uso na empresa hoje.',
      'Escolha um único processo para começar, em vez de espalhar esforço por toda a empresa.'
    ]
  },
  {
    name: 'Consolidação',
    range: '35 – 59 pontos',
    min: 35,
    max: 59,
    description: 'A empresa já tem uma primeira base de dados central e um conselho de governança formado, mas ainda convive com uso paralelo e desalinhado em algumas áreas.',
    recommendations: [
      'Consolide os dados usados por IA numa fonte única antes de escalar mais projetos.',
      'Defina uma métrica de impacto para cada piloto, antes dele começar, não depois.',
      'Formalize uma política básica de uso, mesmo que simples, e comunique a todos os times.'
    ]
  },
  {
    name: 'Escala',
    range: '60 – 79 pontos',
    min: 60,
    max: 79,
    description: 'Sua empresa tem arquitetura definida e integração entre áreas, com resultado começando a ser medido por impacto real, não apenas por adoção. O próximo salto exige disciplina de revisão e foco no próximo gargalo.',
    recommendations: [
      'Instale uma cadência de revisão trimestral dos projetos em produção.',
      'Identifique o próximo gargalo real da operação antes de investir mais em tecnologia.',
      'Documente o retorno de cada projeto para embasar as próximas decisões de investimento.'
    ]
  },
  {
    name: 'Vantagem competitiva',
    range: '80 – 100 pontos',
    min: 80,
    max: 100,
    description: 'IA está integrada à operação e às decisões estratégicas, gerando ganhos contínuos de eficiência. O desafio agora é sustentar essa vantagem enquanto a tecnologia, e a regulação, seguem mudando.',
    recommendations: [
      'Trate a arquitetura de IA como ativo estratégico, revisado no nível executivo.',
      'Avalie expandir a governança para incluir agentes autônomos, com supervisão clara.',
      'Use o histórico de retorno já registrado para priorizar os próximos investimentos com mais precisão.'
    ]
  }
];

/* Gargalos por pergunta (índice = número da pergunta) */
var BOTTLENECKS = [
  {
    title: 'IA ainda é conversa individual, não processo',
    desc: 'O uso está preso ao estágio de chat, sem conexão com nenhum processo real da operação.'
  },
  {
    title: 'Uso concentrado em poucas pessoas ou áreas',
    desc: 'Quando o uso fica restrito a um time, o impacto no resultado da empresa como um todo é praticamente invisível.'
  },
  {
    title: 'Ninguém responde pela governança de IA',
    desc: 'Sem um responsável definido, decisões sobre IA ficam dispersas entre áreas, e ninguém responde pelo resultado.'
  },
  {
    title: 'Dados fragmentados sustentando a IA',
    desc: 'Dados fragmentados ou pouco confiáveis são a causa mais comum de IA que erra ou decepciona.'
  },
  {
    title: 'Pilotos abandonados sem registro do motivo',
    desc: 'Quando ninguém registra por que um piloto parou, o mesmo erro se repete com uma ferramenta diferente.'
  },
  {
    title: 'Priorização não segue o gargalo real',
    desc: 'Aplicar IA sem identificar o gargalo real é a forma mais comum de gastar orçamento sem ver resultado.'
  },
  {
    title: 'Pilotos sem métrica definida antes de começar',
    desc: 'Sem métrica definida antes do piloto, é impossível saber depois se ele funcionou ou não.'
  },
  {
    title: 'Falta cadência de revisão dos projetos',
    desc: 'Projetos sem revisão periódica tendem a continuar consumindo orçamento mesmo sem gerar retorno.'
  },
  {
    title: 'Retorno de IA não é mensurável hoje',
    desc: 'A maioria das empresas usa IA sem conseguir provar, em número, o que ela realmente devolveu.'
  },
  {
    title: 'Ganho de eficiência não é medido',
    desc: 'Sem medir o ganho de eficiência, é impossível justificar mais investimento, ou saber se vale a pena continuar.'
  },
  {
    title: 'Sem política, cada um decide sozinho',
    desc: 'Sem política clara, cada colaborador decide por conta própria o que é seguro fazer com IA, e isso é Shadow IA.'
  }
];

var MAX_TOTAL = 110;

/* ---------- Estado ---------- */

var state = {
  current: 0,
  answers: new Array(QUESTIONS.length).fill(null) // guarda o índice da opção (0-3)
};

/* ---------- Helpers ---------- */

function $(id) { return document.getElementById(id); }

function showScreen(name) {
  var screens = document.querySelectorAll('.screen');
  for (var i = 0; i < screens.length; i++) screens[i].classList.remove('is-active');
  $('screen-' + name).classList.add('is-active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

var CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* ---------- Renderização do questionário ---------- */

function renderQuestion() {
  var q = QUESTIONS[state.current];
  var total = QUESTIONS.length;

  $('quiz-category').textContent = q.category;
  $('quiz-index').textContent = String(state.current + 1);
  $('quiz-total').textContent = String(total);
  $('quiz-question').textContent = q.text;
  $('progressbar-fill').style.width = ((state.current) / total * 100) + '%';

  var wrap = $('quiz-options');
  wrap.innerHTML = '';

  q.options.forEach(function (opt, idx) {
    var selected = state.answers[state.current] === idx;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option' + (selected ? ' is-selected' : '');
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', selected ? 'true' : 'false');
    btn.innerHTML =
      '<span class="option__mark">' + CHECK_SVG + '</span>' +
      '<span class="option__body"><span class="option__letter">' + opt.letter + '.</span> ' +
      escapeHtml(opt.text) + '</span>';
    btn.addEventListener('click', function () {
      state.answers[state.current] = idx;
      renderQuestion();
    });
    wrap.appendChild(btn);
  });

  $('btn-back').textContent = state.current === 0 ? 'Voltar' : 'Voltar';
  $('btn-back').disabled = false;
  $('btn-next').disabled = state.answers[state.current] === null;
  $('btn-next').textContent = state.current === total - 1 ? 'Ver resultado' : 'Avançar';
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---------- Navegação ---------- */

function goNext() {
  if (state.answers[state.current] === null) return;
  if (state.current < QUESTIONS.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    computeAndShowResult();
  }
}

function goBack() {
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  } else {
    showScreen('intro');
  }
}

/* ---------- Resultado ---------- */

function computeAndShowResult() {
  var totalRaw = 0;
  for (var i = 0; i < QUESTIONS.length; i++) {
    var ai = state.answers[i];
    totalRaw += QUESTIONS[i].options[ai].points;
  }
  var score = Math.round(totalRaw / MAX_TOTAL * 100);

  var level = LEVELS[0];
  for (var l = 0; l < LEVELS.length; l++) {
    if (score >= LEVELS[l].min && score <= LEVELS[l].max) { level = LEVELS[l]; break; }
  }

  // Gauge
  var r = 86;
  var circumference = 2 * Math.PI * r;
  var arc = $('gauge-arc');
  arc.style.strokeDasharray = circumference.toFixed(1);
  arc.style.strokeDashoffset = circumference.toFixed(1);

  $('score-number').textContent = '0';
  $('score-raw').textContent = 'Total: ' + totalRaw + ' de ' + MAX_TOTAL + ' pontos';
  $('level-tag').textContent = 'Nível';
  $('level-name').textContent = level.name;
  $('level-range').textContent = level.range;
  $('level-desc').textContent = level.description;

  var recoList = $('reco-list');
  recoList.innerHTML = '';
  level.recommendations.forEach(function (rec) {
    var li = document.createElement('li');
    li.textContent = rec;
    recoList.appendChild(li);
  });

  // Gargalos: perguntas que pontuaram 7 ou menos, as 3 de menor pontuação
  var candidates = [];
  for (var qi = 0; qi < QUESTIONS.length; qi++) {
    var pts = QUESTIONS[qi].options[state.answers[qi]].points;
    if (pts <= 7) candidates.push({ index: qi, points: pts });
  }
  candidates.sort(function (a, b) {
    if (a.points !== b.points) return a.points - b.points;
    return a.index - b.index;
  });
  var top = candidates.slice(0, 3);

  var bnList = $('bottleneck-list');
  bnList.innerHTML = '';
  if (top.length === 0) {
    var liEmpty = document.createElement('li');
    liEmpty.innerHTML = '<span class="bn__empty">Nenhuma resposta pontuou 7 ou menos. Nenhum gargalo identificado neste diagnóstico.</span>';
    liEmpty.style.borderLeftColor = 'var(--line-strong)';
    bnList.appendChild(liEmpty);
  } else {
    top.forEach(function (c) {
      var b = BOTTLENECKS[c.index];
      var li = document.createElement('li');
      li.innerHTML =
        '<div class="bn__title">' + escapeHtml(b.title) + '</div>' +
        '<div class="bn__desc">' + escapeHtml(b.desc) + '</div>';
      bnList.appendChild(li);
    });
  }

  showScreen('result');

  // Anima gauge + número (setTimeout: funciona mesmo com a aba em segundo plano)
  var finalOffset = circumference * (1 - score / 100);
  window.setTimeout(function () {
    arc.style.strokeDashoffset = finalOffset.toFixed(1);
  }, 80);
  animateNumber($('score-number'), 0, score, 1000);
}

function animateNumber(el, from, to, duration) {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { el.textContent = String(to); return; }
  var steps = 34;
  var i = 0;
  var timer = window.setInterval(function () {
    i++;
    var p = i / steps;
    var eased = 1 - Math.pow(1 - p, 3);
    el.textContent = String(Math.round(from + (to - from) * eased));
    if (i >= steps) {
      el.textContent = String(to);
      window.clearInterval(timer);
    }
  }, Math.max(16, Math.round(duration / steps)));
  // Rede de segurança: garante o valor final mesmo se o timer for limitado
  window.setTimeout(function () {
    window.clearInterval(timer);
    el.textContent = String(to);
  }, duration + 400);
}

/* ---------- Reinício ---------- */

function restart() {
  state.current = 0;
  state.answers = new Array(QUESTIONS.length).fill(null);
  showScreen('intro');
}

/* ---------- Init ---------- */

function init() {
  $('quiz-total').textContent = String(QUESTIONS.length);

  $('btn-start').addEventListener('click', function () {
    state.current = 0;
    renderQuestion();
    showScreen('quiz');
  });
  $('btn-next').addEventListener('click', goNext);
  $('btn-back').addEventListener('click', goBack);
  $('btn-restart').addEventListener('click', restart);

  document.addEventListener('keydown', function (e) {
    if (!$('screen-quiz').classList.contains('is-active')) return;
    if (e.key >= '1' && e.key <= '4') {
      var idx = parseInt(e.key, 10) - 1;
      if (idx < QUESTIONS[state.current].options.length) {
        state.answers[state.current] = idx;
        renderQuestion();
      }
    } else if (e.key === 'Enter' && !$('btn-next').disabled) {
      goNext();
    }
  });

  renderQuestion();
}

document.addEventListener('DOMContentLoaded', init);
