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
    estoque: 0,
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
    id: 17,
    nome: "Torino21",
    marca: "Xerjoff",
    categoria: "nicho",
    genero: "unissex",
    ocasiao: ["dia", "trabalho"],
    preco: 1500.00,
    estoque: 1,
    imagem: "img/torino21.jpg",
    notas: {
      saida: "Menta, limão, manjericão, tomilho",
      coracao: "Groselha preta, lavanda, alecrim, jasmim",
      fundo: "Almíscar, verbena"
    },
    descricao: "Uma explosão verde e revigorante de menta e cítricos italianos. Um dos perfumes mais refrescantes, energéticos e refinados da prestigiada casa de nicho Xerjoff.",
    youtubeId: ""
  },

  {
  id: 20,
  nome: "Vibrato",
  marca: "Sospiro",
  categoria: "nicho",
  genero: "unissex",
  ocasiao: ["dia", "trabalho", "noite"],
  preco: 1600.00,         
  estoque: 1,
  imagem: "img/vibrato.jpg",
  notas: {
    saida: "Toranja, bergamota, jasmim, magnólia",
    coracao: "Gengibre, notas herbais, notas atalcadas",
    fundo: "Almíscar, cedro, âmbar, patchouli, raiz de íris"
  },
  descricao: "Uma fragrância cítrica e elegante que abre com a frescura efervescente da toranja e da bergamota, suavizada por jasmim e magnólia. O coração traz o toque picante do gengibre e notas herbais/atalcadas, evoluindo para uma base quente e sofisticada de cedro, âmbar, patchouli e íris. Conhecido pela projeção limpa e pelo perfil versátil de alta qualidade.",
  youtubeId: ""
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
    estoque: 1, // Disponível novamente
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
    estoque: 0, // Disponível novamente
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
    preco: 290.00,
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
    id: 13,
    nome: "Italia",
    marca: "Rayhaan",
    categoria: "arabes",
    genero: "masculino",
    ocasiao: ["noite", "trabalho"],
    preco: 315.00,
    estoque: 1,
    imagem: "img/rayhaan-italia.jpg",
    notas: {
      saida: "Lavanda, limão, bergamota",
      coracao: "Mel, canela, cashmeran, jasmim",
      fundo: "Baunilha, folhas de tabaco, fava tonka"
    },
    descricao: "Uma fragrância acolhedora e refinada inspirada no perfil do Xerjoff Naxos. Destaca-se pelo contraste vibrante da lavanda cítrica com o dulçor rico do mel, canela e tabaco.",
    youtubeId: ""
  },
  {
    id: 14,
    nome: "Maktub Gold",
    marca: "Bidaya Parfums",
    categoria: "arabes",
    genero: "unissex",
    ocasiao: ["noite", "balada"],
    preco: 315.00,
    estoque: 1,
    imagem: "img/maktub-gold.jpg",
    notas: {
      saida: "Laranja brasileira, bergamota, limão, gengibre",
      coracao: "Pera suculenta, canela, cardamomo, cravo",
      fundo: "Baunilha de Madagascar, âmbar, almíscar, notas amadeiradas"
    },
    descricao: "Urbano, sensual e envolvente. Abre com uma explosão cítrica e picante de gengibre, evoluindo para um coração de pera e especiarias quentes sobre uma base marcante de baunilha.",
    youtubeId: ""
  },
  {
    id: 15,
    nome: "Hawas Black",
    marca: "Rasasi",
    categoria: "arabes",
    genero: "masculino",
    ocasiao: ["dia", "noite", "trabalho", "balada"],
    preco: 350.00,
    estoque: 1,
    imagem: "img/hawas-black.jpg",
    notas: {
      saida: "Abacaxi, bergamota, toranja",
      coracao: "Cedro, patchouli, jasmim",
      fundo: "Musgo de carvalho, notas amadeiradas, âmbar"
    },
    descricao: "Interpretação intensa e moderna da linha Hawas. Entrega um topo frutado marcante de abacaxi e cítricos que se fixa sobre uma base amadeirada, musgosa e ambarada de alta projeção.",
    youtubeId: ""
  },
  {
    id: 16,
    nome: "Ayat",
    marca: "Bidaya Parfums",
    categoria: "arabes",
    genero: "unissex",
    ocasiao: ["noite", "balada"],
    preco: 315.00,
    estoque: 1,
    imagem: "img/bidaya-ayat.jpg",
    notas: {
      saida: "Hibisco, hortelã-pimenta, groselha preta",
      coracao: "Rosa damascena, baunilha, canela, ambreta",
      fundo: "Âmbar, couro encorpado"
    },
    descricao: "Perfume floral oriental opulento e misterioso, inspirado no perfil olfativo de Hibiscus Mahajád. Mescla o frescor frutado e florais intensos a um fundo denso de couro e baunilha.",
    youtubeId: ""
  },
  {
    id: 19,
    nome: "Rose Éclat",
    marca: "Orientica",
    categoria: "arabes",
    genero: "feminino",
    ocasiao: ["dia", "noite", "trabalho"],
    preco: 485.00,
    estoque: 1,
    imagem: "img/rose-eclat.jpg",
    notas: {
      saida: "Pêssego, bergamota, toranja, noz-moscada",
      coracao: "Rosa aveludada, peônia rosa, violeta",
      fundo: "Âmbar, almíscar, benjoim, vetiver"
    },
    descricao: "Uma fragrância feminina extremamente elegante e sofisticada. Traz um buquê radiante de rosas aveludadas e peônias envolto em uma aura suave de âmbar e almíscar.",
    youtubeId: ""
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
    estoque: 0,
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
    preco: 645.00,
    estoque: 2,
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
    estoque: 0,
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
    estoque: 0,
    imagem: "img/most-wanted.jpg",
    notas: {
      saida: "Gengibre vermelho",
      coracao: "Madeiras incandescentes",
      fundo: "Baunilha bourbon"
    },
    descricao: "Um perfume intenso e amadeirado. Traz um contraste marcante entre o frescor ardente do gengibre e uma base quente e reconfortante de madeiras e baunilha.",
    youtubeId: "iO3MJsmHQII"
  },
    {
    id: 18,
    nome: "Man in Black Parfum",
    marca: "Bvlgari",
    categoria: "designer",
    genero: "masculino",
    ocasiao: ["noite", "trabalho", "balada"],
    preco: 675.00,
    estoque: 1,
    imagem: "img/man-in-black.jpg",
    notas: {
      saida: "Especiarias quentes, elemi",
      coracao: "Íris atalcado, tuberosa",
      fundo: "Madeiras escuras, benjoim de Sião"
    },
    descricao: "Uma interpretação ainda mais intensa, concentrada e sofisticada. Combina o frescor especiado do elemi e o requinte da íris com uma base profunda e amadeirada de benjoim de Sião.",
    youtubeId: ""
  }
];