// ============================================================
//  EDITE AQUI — todo o conteúdo do site fica neste arquivo.
//  Troque foto, e-mail e links dos vídeos quando quiser.
//
//  Este é o site em PORTUGUÊS (nastedit.online).
//  A versão em inglês fica em data/site-en.ts e tem exatamente
//  os mesmos campos. Mexeu num, confira o outro.
// ============================================================

export const site = {
  name: "Luiz Fernando",
  role: "Editor de Cortes",
  email: "lftrosobrinho@gmail.com",

  // ----- FOTO DE PERFIL -----
  // Coloque a imagem em /public (ex.: public/luiz.jpg) e troque o caminho abaixo.
  // Enquanto não tiver foto, deixe "" que aparece um placeholder com as iniciais.
  photo: "/luiz.jpg",

  tagline:
    "Transformo lives e podcasts em cortes que prendem a atenção do início ao fim.",

  // ----- SEÇÕES DE TEXTO -----
  why: {
    title: "Por que eu edito",
    body: "Acredito que um bom corte é capaz de transformar a forma como uma ideia chega até as pessoas. Meu trabalho é encontrar os momentos mais marcantes de cada conteúdo e entregá-los em um formato direto, dinâmico e fácil de consumir.",
  },

  story: {
    title: "Minha trajetória",
    body: 'Comecei a editar vídeos como hobby, fazendo "melhores momentos" jogando videogame com meus amigos, aos 14 anos. Com o tempo, percebi que tinha facilidade para contar histórias, criar ritmo e arrancar algumas risadas de quem assistia.',
  },

  experience: {
    title: "Experiência",
    body: "Tenho experiência com edição para canais de grande alcance, cuidando do ritmo, das legendas, do som e dos cortes estratégicos que prendem a atenção do espectador do início ao fim.",
  },

  focus: {
    title: "Meu foco",
    body: "Atualmente foco em edição de vídeos curtos, ajudando criadores a multiplicarem o alcance dos seus conteúdos. Meu trabalho é voltado principalmente para formatos curtos, mas também posso assumir projetos em formatos mais longos quando necessário, adaptando a edição à proposta e ao objetivo de cada conteúdo.",
  },

  // ----- O QUE EU FAÇO (cards) -----
  services: [
    {
      title: "Ritmo & corte",
      body: "Cortes estratégicos que mantêm o espectador grudado na tela.",
    },
    {
      title: "Legendas dinâmicas",
      body: "Legendas no tempo certo que aumentam retenção e acessibilidade.",
    },
    {
      title: "Som & mixagem",
      body: "Tratamento de áudio, trilha e efeitos para um resultado limpo.",
    },
    {
      title: "Formato viral",
      body: "Conteúdo direto e dinâmico, pronto para Reels, Shorts e TikTok.",
    },
  ],

  // ----- PORTFÓLIO (carrossel por canal) -----
  // Cada canal tem seus vídeos. Para adicionar um vídeo do Google Drive,
  // use o link de "preview": https://drive.google.com/file/d/ID_DO_ARQUIVO/preview
  // (o arquivo precisa estar compartilhado como "qualquer pessoa com o link").
  portfolio: [
    {
      channel: "Renato Cariani Cortes",
      videos: [
        { title: "Corte 1", embed: "https://drive.google.com/file/d/1OZra-ATxw8p-t33J1HPk69alyUZ98z_B/preview" },
        { title: "Corte 2", embed: "https://drive.google.com/file/d/1ncpTSMsk2lVAF-rq0qwGMWoaD5OeqlVY/preview" },
        { title: "Corte 3", embed: "https://drive.google.com/file/d/1NPikJlWdFvtIadieJ7ItNMLnSsOHAqiM/preview" },
      ],
    },
    {
      channel: "Cortes Primos Agro",
      videos: [
        { title: "Corte 1", embed: "https://drive.google.com/file/d/15jSwy6sjhGpwmMoZyoffS5Ta_ixYtD49/preview" },
        { title: "Corte 2", embed: "https://drive.google.com/file/d/1BlPaG_qDfrvaEkeBHVsYuECHR511IhCH/preview" },
        { title: "Corte 3", embed: "https://drive.google.com/file/d/1t3GyHiK1Bw1FUmshHHRYMIldfJiRYx7q/preview" },
      ],
    },
    {
      channel: "IngCut Cortes",
      videos: [
        { title: "Corte 1", embed: "https://drive.google.com/file/d/1bypazObB7mQIF3mYi1jnNIjVaSR8sGe3/preview" },
        { title: "Corte 2", embed: "https://drive.google.com/file/d/1jt-cLz1JXlI62DoL7aOIrl1prnWnEMjF/preview" },
        { title: "Corte 3", embed: "https://drive.google.com/file/d/105COXz3NjULMh1yVis46w3s3qNBRca5Z/preview" },
      ],
    },
  ],

  // ----- CANAIS ATENDIDOS (usado no marquee) -----
  channels: ["Renato Cariani Cortes", "Cortes Primos Agro", "IngCut Cortes"],

  // ----- REDES (opcional) — deixe "" para esconder -----
  socials: {
    instagram: "",
    youtube: "",
    whatsapp: "", // ex.: "https://wa.me/55SEUNUMERO"
  },

  // ============================================================
  //  RÓTULOS DA INTERFACE
  //  Menu, botões e títulos de seção. Mexa aqui se quiser trocar
  //  o nome de um botão; o resto do site se ajusta sozinho.
  // ============================================================
  ui: {
    // Nomes das âncoras na barra de endereço (nastedit.online/#sobre).
    // Só letras minúsculas, sem acento e sem espaço.
    ids: {
      top: "topo",
      about: "sobre",
      focus: "foco",
      portfolio: "portfolio",
      contact: "contato",
    },

    nav: {
      about: "Sobre",
      focus: "Foco",
      portfolio: "Portfólio",
      contact: "Contato",
      cta: "Entre em contato",
    },

    hero: {
      seeWork: "Ver portfólio",
      scroll: "ver mais ↓",
    },

    // Entram no letreiro deslizante junto com os nomes dos canais.
    marquee: ["Lives", "Podcasts", "Shorts", "Reels"],

    aboutSection: {
      label: "Sobre mim",
      heading: "Um bom corte transforma a forma como uma ideia chega às pessoas.",
    },

    focusSection: {
      heading: "Cortes feitos para multiplicar alcance.",
    },

    portfolioSection: {
      label: "Portfólio",
      heading: "Alguns cortes selecionados",
      body: "Trabalhos para canais de grande alcance. Escolha um canal e arraste para navegar pelos cortes.",
      goToVideo: "Ir para o vídeo", // vira "Ir para o vídeo 2" (leitor de tela)
    },

    contactSection: {
      label: "Vamos trabalhar juntos",
      heading: "Tem um conteúdo que precisa ser editado?",
      body: "Me manda uma mensagem e vamos transformar suas lives e podcasts em vídeos que prendem a atenção.",
    },

    emailCopied: "E-mail copiado!",

    // Botão que leva para a outra língua, no canto da barra de cima.
    langSwitch: {
      label: "EN",
      href: "/en/",
      title: "Read in English",
    },
  },
};

export type Site = typeof site;
