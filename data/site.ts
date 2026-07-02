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

  // ----- PORTFÓLIO (carrossel por canal) -----
  // Cada canal tem seus vídeos. Para adicionar um vídeo do Google Drive,
  // use o link de "preview": https://drive.google.com/file/d/ID_DO_ARQUIVO/preview
  // (o arquivo precisa estar compartilhado como "qualquer pessoa com o link").
  portfolio: [
    {
      channel: "Renato Cariani Cortes",
      videos: [
        { title: "Corte 1", embed: "https://drive.google.com/file/d/1dHvyG4Cau1ubBBXJ0yS45ehsqCRyZ6ye/preview" },
        { title: "Corte 2", embed: "https://drive.google.com/file/d/12bNE6KKHeCrXKoi4EZU7iRAT_aki7DoU/preview" },
        { title: "Corte 3", embed: "https://drive.google.com/file/d/1j7HZWc9HxsX1I6rn06sifh7Yryg3fIa8/preview" },
      ],
    },
    {
      channel: "Cortes Primos Agro",
      videos: [
        { title: "Corte 1", embed: "https://drive.google.com/file/d/1nsxgWu347hFukKg0RkK3dk1jFlrlwAKt/preview" },
        { title: "Corte 2", embed: "https://drive.google.com/file/d/1zr1rRo7Q5LC9MjFRathfmaQPOETJ8wRK/preview" },
        { title: "Corte 3", embed: "https://drive.google.com/file/d/1EmgLvnH0Mm40EY8ey5dOWsGRwKy2bbvF/preview" },
      ],
    },
    {
      channel: "IngCut Cortes",
      videos: [
        { title: "Corte 1", embed: "https://drive.google.com/file/d/1UyVTnyPByBGg_SWuB--vQzSOiWlltWGg/preview" },
        { title: "Corte 2", embed: "https://drive.google.com/file/d/1R1hinaLsmDtVOIimaNdfQBKtgPpZYfWN/preview" },
        { title: "Corte 3 – IngCut", embed: "https://drive.google.com/file/d/17gy7qf21iheFSi-0I34h35zcHEiV9hSh/preview" },
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
};

export type Site = typeof site;
