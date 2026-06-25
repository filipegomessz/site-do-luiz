// ============================================================
//  EDITE AQUI — todo o conteúdo do site fica neste arquivo.
//  Troque foto, e-mail e links dos vídeos quando quiser.
// ============================================================

export const site = {
  name: "Luiz Fernando",
  role: "Editor de Cortes",
  email: "lftrosobrinho@gmail.com",

  // ----- FOTO DE PERFIL -----
  // Coloque a imagem em /public (ex.: public/luiz.jpg) e troque o caminho abaixo.
  // Enquanto não tiver foto, deixe "" que aparece um placeholder com as iniciais.
  photo: "", // ex.: "/luiz.jpg"

  tagline:
    "Transformo lives e podcasts em cortes que prendem a atenção do início ao fim.",

  // ----- SEÇÕES DE TEXTO -----
  why: {
    title: "Por que eu edito",
    body: "Acredito que um bom corte é capaz de transformar a forma como uma ideia chega até as pessoas. Meu trabalho é encontrar os momentos mais marcantes de cada conteúdo e entregá-los em um formato direto, dinâmico e fácil de consumir.",
  },

  story: {
    title: "Minha trajetória",
    body: "Comecei editando vídeos para amigos e pequenos criadores, e logo descobri que tinha paixão por contar histórias em formatos curtos. Hoje trabalho com diversos canais, transformando lives e podcasts em cortes que viralizam.",
  },

  experience: {
    title: "Experiência",
    body: "Tenho experiência com edição para canais de grande alcance, cuidando do ritmo, das legendas, do som e dos cortes estratégicos que prendem a atenção do espectador do início ao fim.",
  },

  focus: {
    title: "Meu foco",
    body: "Atualmente foco em edição de cortes para nichos de fitness, agronegócio e entretenimento, ajudando criadores a multiplicarem o alcance dos seus conteúdos.",
    niches: ["Fitness", "Agronegócio", "Entretenimento"],
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

  // ----- PORTFÓLIO -----
  // Cole os links do Google Drive (ou YouTube) em "url".
  // Em "thumb" você pode pôr uma imagem de capa em /public; deixe "" por enquanto.
  portfolio: [
    {
      title: "Corte 1",
      channel: "Renato Cariani Cortes",
      url: "", // ex.: link do Drive ou YouTube
      thumb: "",
    },
    {
      title: "Corte 2",
      channel: "IngCut Cortes",
      url: "",
      thumb: "",
    },
    {
      title: "Corte 3",
      channel: "Cortes Primos Agro",
      url: "",
      thumb: "",
    },
  ],

  // ----- CANAIS ATENDIDOS -----
  channels: ["Renato Cariani Cortes", "IngCut Cortes", "Cortes Primos Agro"],

  // ----- REDES (opcional) — deixe "" para esconder -----
  socials: {
    instagram: "",
    youtube: "",
    whatsapp: "", // ex.: "https://wa.me/55SEUNUMERO"
  },
};

export type Site = typeof site;
