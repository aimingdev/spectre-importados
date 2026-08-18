/* ============================================================
   SPECTRE IMPORTADOS — Black & Gold Logic
   ============================================================ */

const grid = document.getElementById('grid-produtos');
const overlay = document.getElementById('modal-overlay');
const searchInput = document.getElementById('busca');

let categoriaAtual = 'todos';
let termoBusca = '';

const formatarPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function produtosVisiveis() {
  return catalogo.filter((p) => {
    const bateCategoria = categoriaAtual === 'todos' || p.categoria === categoriaAtual;
    const bateBusca =
      termoBusca === '' ||
      p.nome.toLowerCase().includes(termoBusca) ||
      p.marca.toLowerCase().includes(termoBusca);
    return bateCategoria && bateBusca;
  });
}

function renderizar() {
  const produtos = produtosVisiveis();
  grid.innerHTML = '';

  if (produtos.length === 0) {
    grid.innerHTML = `
      <div class="empty-state fade-in">
        <i class="fa-solid fa-flask"></i>
        <span class="serif">Nenhuma essência encontrada</span>
        <p>Explore outras categorias ou termos de busca.</p>
      </div>`;
    return;
  }

  produtos.forEach((p, index) => {
    const disponivel = p.estoque > 0;
    const isNiche = p.categoria === 'nicho';

    let badges = '<div class="badge-wrapper">';
    if (isNiche) badges += '<span class="badge badge-nicho">Nicho</span>';
    if (!disponivel) badges += '<span class="badge badge-esgotado">Esgotado</span>';
    badges += '</div>';

    const statusEstoque = disponivel
      ? `<span class="estoque-ok"><i class="fa-solid fa-check-circle"></i> ${p.estoque} em estoque</span>`
      : `<span class="estoque-out"><i class="fa-solid fa-xmark-circle"></i> Esgotado</span>`;

    const card = document.createElement('div');
    card.className = 'card fade-in';
    card.style.animationDelay = `${index * 0.05}s`;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    
    // Imagem provisória preto e dourado caso a foto real não esteja salva
    const fallbackImg = `https://placehold.co/400x500/0a0a0a/d4af37?text=${encodeURIComponent(p.marca + '\\n' + p.nome)}`;

    card.innerHTML = `
      <div class="img-wrap">
        <img src="${p.imagem}" alt="${p.nome}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImg}';">
        ${badges}
      </div>
      <div class="info">
        <p class="marca">${p.marca}</p>
        <h3 class="nome serif">${p.nome}</h3>
        <div class="footer-row">
          <span class="preco">${formatarPreco(p.preco)}</span>
          ${statusEstoque}
        </div>
      </div>
    `;
    card.addEventListener('click', () => abrirModal(p.id));
    grid.appendChild(card);
  });
}

function linhaPiramide(classe, rotulo, notas) {
  if (!notas) return '';
  return `
    <div class="piramide-tier ${classe}">
      <div class="tier-name">${rotulo}</div>
      <div class="tier-notes">${notas}</div>
    </div>`;
}

function abrirModal(id) {
  const p = catalogo.find((item) => item.id === id);
  if (!p) return;

  const disponivel = p.estoque > 0;
  // Imagem provisória preto e dourado
  const fallbackImg = `https://placehold.co/400x500/0a0a0a/d4af37?text=${encodeURIComponent(p.marca + '\\n' + p.nome)}`;
  
  const imgEl = document.getElementById('modal-img');
  imgEl.src = p.imagem;
  imgEl.onerror = function() {
    this.onerror = null;
    this.src = fallbackImg;
  };

  document.getElementById('modal-marca').textContent = p.marca;
  document.getElementById('modal-nome').textContent = p.nome;
  document.getElementById('modal-descricao').textContent = p.descricao || '';
  document.getElementById('modal-preco').textContent = formatarPreco(p.preco);

  const estoqueEl = document.getElementById('modal-estoque');
  estoqueEl.innerHTML = disponivel 
    ? `<i class="fa-solid fa-check-circle" style="color: var(--ok)"></i> ${p.estoque} disponíveis` 
    : `<i class="fa-solid fa-xmark-circle" style="color: var(--out)"></i> Esgotado no momento`;
  estoqueEl.style.color = disponivel ? 'var(--ok)' : 'var(--out)';

  document.getElementById('modal-piramide').innerHTML =
    linhaPiramide('saida', 'Saída', p.notas?.saida) +
    linhaPiramide('coracao', 'Coração', p.notas?.coracao) +
    linhaPiramide('fundo', 'Fundo', p.notas?.fundo);

  const videoWrap = document.getElementById('modal-video-wrap');
  if (p.youtubeId) {
    let videoId = p.youtubeId;
    if (videoId.includes('youtube.com/watch?v=')) {
      videoId = videoId.split('v=')[1].split('&')[0];
    } else if (videoId.includes('youtu.be/')) {
      videoId = videoId.split('youtu.be/')[1].split('?')[0];
    }

    videoWrap.style.display = 'block';
    videoWrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
  } else {
    videoWrap.style.display = 'none';
    videoWrap.innerHTML = '';
  }

  const btn = document.getElementById('modal-whatsapp');
  if (disponivel) {
    const msg = encodeURIComponent(`Olá! Tenho interesse no perfume ${p.nome} (${p.marca}).`);
    btn.href = `https://wa.me/${NUMERO_WHATSAPP}?text=${msg}`;
    btn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Finalizar Compra';
    btn.classList.remove('disabled');
  } else {
    btn.href = '#';
    btn.innerHTML = '<i class="fa-solid fa-bell"></i> Avise-me quando chegar';
    btn.classList.add('disabled');
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

overlay.addEventListener('click', (e) => { if (e.target === overlay) fecharModal(); });
document.querySelector('.modal-close').addEventListener('click', fecharModal);

document.querySelectorAll('.tabs button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    categoriaAtual = btn.dataset.categoria;
    renderizar();
  });
});

searchInput.addEventListener('input', (e) => {
  termoBusca = e.target.value.trim().toLowerCase();
  renderizar();
});

renderizar();