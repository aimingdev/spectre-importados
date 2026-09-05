/*
  ============================================================
  CATÁLOGO — SPECTRE IMPORTADOS
  ============================================================
*/

const NUMERO_WHATSAPP = "5519978274151"; 

const catalogo = [
  // ===== NICHO =====
  {
    id: 1,
    nome: "Hacivat Extrait de Parfum",
    marca: "Nishane",
    categoria: "nicho",
    genero: "unissex",
    ocasiao: ["dia", "trabalho"],
    preco: 1400.00,
    estoque: 1,
    imagem: "img/hacivat.jpg",
    notas: {
      saida: "Bergamota, abacaxi, toranja",
      coracao: "Jasmim, patchouli, cedro",
      fundo: "Madeira limpa, musgo de carvalho, madeira seca"
    },
    descricao: "Uma fragrância chipre moderna e sofisticada, reconhecida por sua alta projeção. Destaca-se pelo frescor incisivo do abacaxi e da bergamota sobre uma base amadeirada de musgo de carvalho.",
    youtubeId: "J7nCX4UhCsE"
  },
  {
    id: 2,
    nome: "Xerjoff Naxos",
    marca: "Xerjoff",
    categoria: "nicho",
    genero: "unissex",
    ocasiao: ["noite", "trabalho"],
    preco: 1500.00,
    estoque: 0, // Marcado como esgotado
    imagem: "img/naxos.jpg",
    notas: {
      saida: "Lavanda, bergamota, limão",
      coracao: "Mel, canela, cashmeran, jasmim sambac",
      fundo: "Tabaco, fava tonka, baunilha"
    },
    descricao: "Uma composição rica que equilibra o frescor cítrico inicial com notas profundas e reconfortantes de mel, tabaco e baunilha. Um perfume encorpado e extremamente elegante.",
    youtubeId: "BM8vLgFLQB4"
  },
  {
    id: 13,
    nome: "Vibrato",
    marca: "Sospiro",
    categoria: "nicho",
    genero: "unissex",
    ocasiao: ["dia", "noite"],
    preco: 1600.00,
    estoque: 1,
    imagem: "img/vibrato.jpg",
    notas: {
      saida: "Toranja, bergamota, jasmim, magnólia",
      coracao: "Gengibre, notas herbais, notas atalcadas",
      fundo: "Almíscar, cedro, âmbar, patchouli, raiz de orris"
    },
    descricao: "Uma fragrância cítrico-amadeirada sofisticada assinada por Christian Provenzano. Abre com uma explosão vibrante de toranja e bergamota, evolui para um coração picante de gengibre e finaliza em uma base quente de âmbar, cedro e patchouli.",
    youtubeId: "lvj8isSwEF0"
  },

  // ===== ÁRABES =====
  {
    id: 3,
    nome: "Pacific Aura",
    marca: "Rayhaan",
    categoria: "arabes",
    genero: "masculino",
    ocasiao: ["dia"],
    preco: 315.00,
    estoque: 0, // Marcado como esgotado
    imagem: "img/pacific-aura.jpg",
    notas: {
      saida: "Tangerina, hortelã, citron, bergamota",
      coracao: "Manjericão, cenoura, rosa",
      fundo: "Figo, ambroxan, âmbar"
    },
    descricao: "Um perfume refrescante com notas cítricas e aquáticas, ideal para o dia a dia e climas quentes. Fragrância inspirada no perfil do Pacific Chill, da Louis Vuitton.",
    youtubeId: "ansGGonTkAc"
  },
  {
    id: 4,
    nome: "Obsidian",
    marca: "Rayhaan",
    categoria: "arabes",
    genero: "masculino",
    ocasiao: ["noite", "trabalho"],
    preco: 300.00,
    estoque: 1,
    imagem: "img/obsidian.jpg",
    notas: {
      saida: "Íris, notas cítricas",
      coracao: "Couro encorpado",
      fundo: "Sândalo, ambrette, cedro, oud"
    },
    descricao: "Uma fragrância sofisticada que combina notas atalcadas de íris com a sobriedade do couro e das madeiras. Inspirada no aclamado perfil olfativo do Dior Homme Intense.",
    youtubeId: "QsKLObYJ2y4"
  },
  {
    id: 5,
    nome: "Vulcan Feu",
    marca: "French Avenue",
    categoria: "arabes",
    genero: "unissex",
    ocasiao: ["noite", "balada"],
    preco: 350.00,
    estoque: 2,
    imagem: "img/vulcan-feu.jpg",
    notas: {
      saida: "Manga, limão, gengibre",
      coracao: "Pimenta rosa, jasmim, pralinê",
      fundo: "Fava tonka, cedro, musgo"
    },
    descricao: "Um perfume frutado e ambarado, com abertura marcante de manga evoluindo para um fundo especiado. Desenvolvido como inspiração do exclusivo God of Fire, de Stéphane Humbert Lucas.",
    youtubeId: "VXCxgVYz3dY"
  },
  {
    id: 6,
    nome: "Club de Nuit Intense Man",
    marca: "Armaf",
    categoria: "arabes",
    genero: "masculino",
    ocasiao: ["dia", "noite", "balada", "trabalho"],
    preco: 260.00,
    estoque: 1,
    imagem: "img/club-de-nuit.jpg",
    notas: {
      saida: "Limão, abacaxi, bergamota, cassis, maçã",
      coracao: "Bétula, jasmim, rosa",
      fundo: "Âmbar cinzento, almíscar, patchouli"
    },
    descricao: "Conhecido por sua excelente fixação, apresenta uma abertura cítrica esfumaçada que evolui para notas amadeiradas. Amplamente reconhecido como a principal alternativa ao Creed Aventus.",
    youtubeId: "h_nkgMc9TF0"
  },
  {
    id: 7,
    nome: "Liquid Brun",
    marca: "French Avenue",
    categoria: "arabes",
    genero: "masculino",
    ocasiao: ["noite", "balada"],
    preco: 315.00,
    estoque: 1,
    imagem: "img/liquid-brun.jpg",
    notas: {
      saida: "Canela, flor de laranjeira, cardamomo",
      coracao: "Baunilha bourbon, elemi",
      fundo: "Pralinê, ambroxan, pau-santo"
    },
    descricao: "Um gourmand refinado onde a doçura da baunilha bourbon se mistura com especiarias e notas ambaradas. Traz um perfil aromático inspirado no Althaïr, da Parfums de Marly.",
    youtubeId: "65yA2rOUxJ4"
  },
  {
    id: 8,
    nome: "Khamrah Qahwa",
    marca: "Lattafa",
    categoria: "arabes",
    genero: "unissex",
    ocasiao: ["noite", "balada"],
    preco: 250.00,
    estoque: 1,
    imagem: "img/khamrah-qahwa.jpg",
    notas: {
      saida: "Canela, cardamomo, gengibre",
      coracao: "Pralinê, frutas, flores brancas",
      fundo: "Baunilha, café arábico, fava tonka"
    },
    descricao: "Uma variação do sucesso Khamrah, agora com o contraste do café torrado equilibrando as notas doces de pralinê e canela. Fragrância na mesma linha olfativa de Angels' Share, de By Kilian.",
    youtubeId: "Nr_SJKWfbs0"
  },
  {
    id: 14,
    nome: "Amber Rouge",
    marca: "Orientica",
    categoria: "arabes",
    genero: "unissex",
    ocasiao: ["noite", "balada"],
    preco: 450.00,
    estoque: 1,
    imagem: "img/amber-rouge.jpg",
    notas: {
      saida: "Açafrão, jasmim",
      coracao: "Amberwood, âmbar cinzento",
      fundo: "Cedro, resina de abeto"
    },
    descricao: "Um perfume âmbar-especiado intenso e envolvente, com abertura de açafrão e jasmim evoluindo para uma base rica de amberwood e âmbar cinzento. Desenvolvido como alternativa acessível ao exclusivo Baccarat Rouge 540, da Maison Francis Kurkdjian.",
    youtubeId: "vcVALMo-fx0"
  },
  {
    id: 15,
    nome: "Yara",
    marca: "Lattafa",
    categoria: "arabes",
    genero: "feminino",
    ocasiao: ["dia", "noite"],
    preco: 250.00,
    estoque: 1,
    imagem: "img/yara.jpg",
    notas: {
      saida: "Orquídea, heliotrópio, tangerina",
      coracao: "Acorde gourmand, frutas tropicais",
      fundo: "Baunilha, almíscar, sândalo"
    },
    descricao: "Uma fragrância doce e cremosa da família âmbar baunilhada, com abertura floral e cítrica que evolui para um coração de frutas tropicais e acorde gourmand, finalizando em uma base calorosa de baunilha e almíscar.",
    youtubeId: "6U2-EQGoL9M"
  },
  {
    id: 16,
    nome: "Supremacy Collector's Edition",
    marca: "Afnan",
    categoria: "arabes",
    genero: "masculino",
    ocasiao: ["dia", "noite", "trabalho"],
    preco: 450.00,
    estoque: 1,
    imagem: "img/supremacy-collectors-edition.jpg",
    notas: {
      saida: "Abacaxi, bergamota, maçã, flores brancas",
      coracao: "Flor de laranjeira, bétula, âmbar",
      fundo: "Musgo de carvalho, almíscar, âmbar cinzento"
    },
    descricao: "Uma fragrância chipre frutada vibrante, com abertura suculenta de abacaxi e bergamota evoluindo para um coração ambarado e levemente defumado de bétula. Desenvolvido como uma alternativa acessível ao exclusivo Aventus Absolu, da Creed.",
    youtubeId: "u2WQomK7OiQ"
  },

  // ===== DESIGNER =====
  {
    id: 9,
    nome: "Libre Le Parfum",
    marca: "YSL",
    categoria: "designer",
    genero: "feminino",
    ocasiao: ["noite", "balada"],
    preco: 900.00,
    estoque: 1,
    imagem: "img/libre.jpg",
    notas: {
      saida: "Bergamota, gengibre, açafrão",
      coracao: "Lavanda, flor de laranjeira",
      fundo: "Vetiver, fava tonka, mel"
    },
    descricao: "A interpretação mais intensa da linha Libre. Combina a lavanda francesa e a flor de laranjeira com um acorde quente, picante e ambarado de açafrão e mel.",
    youtubeId: "Rbbk1X_ZEeo"
  },
  {
    id: 10,
    nome: "Le Male Elixir",
    marca: "Jean Paul Gaultier",
    categoria: "designer",
    genero: "masculino",
    ocasiao: ["noite", "balada"],
    preco: 675.00,
    estoque: 1,
    imagem: "img/le-male-elixir.jpg",
    notas: {
      saida: "Lavanda, menta",
      coracao: "Baunilha, benjoim",
      fundo: "Mel, fava tonka, tabaco"
    },
    descricao: "Fragrância ambarada e aromática. A lavanda clássica da linha é envolvida por notas densas de fava tonka, benjoim e um distinto acorde de mel e tabaco.",
    youtubeId: "4W-sW-nG3JY"
  },
  {
    id: 11,
    nome: "Sauvage Eau de Parfum",
    marca: "Dior",
    categoria: "designer",
    genero: "masculino",
    ocasiao: ["dia", "noite", "trabalho", "balada"],
    preco: 750.00,
    estoque: 1,
    imagem: "img/sauvage.jpg",
    notas: {
      saida: "Bergamota da Calábria",
      coracao: "Lavanda, pimenta de Sichuan",
      fundo: "Baunilha da Papua Nova Guiné, ambroxan"
    },
    descricao: "Mantém o frescor picante original, mas ganha densidade e sofisticação com a adição do absoluto de baunilha oriental e notas ambaradas.",
    youtubeId: "mWO8zew6zRc"
  },
  {
    id: 12,
    nome: "The Most Wanted Parfum",
    marca: "Azzaro",
    categoria: "designer",
    genero: "masculino",
    ocasiao: ["noite", "balada"],
    preco: 600.00,
    estoque: 1,
    imagem: "img/most-wanted.jpg",
    notas: {
      saida: "Gengibre vermelho",
      coracao: "Madeiras incandescentes",
      fundo: "Baunilha bourbon"
    },
    descricao: "Um perfume intenso e amadeirado. Traz um contraste marcante entre o frescor ardente do gengibre e uma base quente e reconfortante de madeiras e baunilha.",
    youtubeId: "iO3MJsmHQII"
  }
];