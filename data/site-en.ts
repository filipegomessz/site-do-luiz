// ============================================================
//  VERSÃO EM INGLÊS (nastedit.online/en/)
//
//  Tem exatamente os mesmos campos do data/site.ts, só que em
//  inglês. Os vídeos, a foto e o e-mail são os mesmos dos dois
//  lados: mudou um link de vídeo lá, mude aqui também.
//
//  Se faltar ou sobrar um campo aqui, o site NÃO compila e o
//  deploy falha com erro de tipo. Isso é de propósito: é o que
//  impede uma das duas línguas de ficar desatualizada em silêncio.
// ============================================================

import type { Site } from "./site";

export const siteEn: Site = {
  name: "Luiz Fernando",
  role: "Short-Form Video Editor",
  email: "lftrosobrinho@gmail.com",

  photo: "/luiz.jpg",

  tagline:
    "I turn livestreams and podcasts into clips that hold attention from start to finish.",

  // ----- SEÇÕES DE TEXTO -----
  why: {
    title: "Why I edit",
    body: "I believe a good clip can change the way an idea reaches people. My job is to find the moments that stand out in each piece of content and deliver them in a format that's direct, fast-moving and easy to watch.",
  },

  story: {
    title: "How I got started",
    body: 'I started editing as a hobby at 14, cutting "best moments" out of gaming sessions with my friends. Over time I realized I was good at telling a story, building rhythm and getting a laugh out of whoever was watching.',
  },

  experience: {
    title: "Experience",
    body: "I've edited for channels with large audiences, handling the pacing, the captions, the sound and the cuts that keep people watching all the way through.",
  },

  focus: {
    title: "My focus",
    body: "Right now I focus on short-form editing, helping creators get their content in front of far more people. Most of what I do is short-form, but I also take on longer formats when a project calls for it, shaping the edit around what each piece is meant to do.",
  },

  // ----- O QUE EU FAÇO (cards) -----
  services: [
    {
      title: "Pacing & cuts",
      body: "Cuts placed to keep people glued to the screen.",
    },
    {
      title: "Dynamic captions",
      body: "Captions timed to the word, for better retention and accessibility.",
    },
    {
      title: "Sound & mixing",
      body: "Audio cleanup, music and effects for a clean result.",
    },
    {
      title: "Viral-ready",
      body: "Direct, fast-moving content, ready for Reels, Shorts and TikTok.",
    },
  ],

  // ----- PORTFÓLIO -----
  // Mesmos vídeos do site em português. Nome do canal é nome
  // próprio e não se traduz.
  portfolio: [
    {
      channel: "Renato Cariani Cortes",
      videos: [
        { title: "Clip 1", embed: "https://drive.google.com/file/d/1OZra-ATxw8p-t33J1HPk69alyUZ98z_B/preview" },
        { title: "Clip 2", embed: "https://drive.google.com/file/d/1ncpTSMsk2lVAF-rq0qwGMWoaD5OeqlVY/preview" },
        { title: "Clip 3", embed: "https://drive.google.com/file/d/1NPikJlWdFvtIadieJ7ItNMLnSsOHAqiM/preview" },
      ],
    },
    {
      channel: "Cortes Primos Agro",
      videos: [
        { title: "Clip 1", embed: "https://drive.google.com/file/d/15jSwy6sjhGpwmMoZyoffS5Ta_ixYtD49/preview" },
        { title: "Clip 2", embed: "https://drive.google.com/file/d/1BlPaG_qDfrvaEkeBHVsYuECHR511IhCH/preview" },
        { title: "Clip 3", embed: "https://drive.google.com/file/d/1t3GyHiK1Bw1FUmshHHRYMIldfJiRYx7q/preview" },
      ],
    },
    {
      channel: "IngCut Cortes",
      videos: [
        { title: "Clip 1", embed: "https://drive.google.com/file/d/1bypazObB7mQIF3mYi1jnNIjVaSR8sGe3/preview" },
        { title: "Clip 2", embed: "https://drive.google.com/file/d/1jt-cLz1JXlI62DoL7aOIrl1prnWnEMjF/preview" },
        { title: "Clip 3", embed: "https://drive.google.com/file/d/105COXz3NjULMh1yVis46w3s3qNBRca5Z/preview" },
      ],
    },
  ],

  channels: ["Renato Cariani Cortes", "Cortes Primos Agro", "IngCut Cortes"],

  socials: {
    instagram: "",
    youtube: "",
    whatsapp: "",
  },

  // ============================================================
  //  RÓTULOS DA INTERFACE
  // ============================================================
  ui: {
    ids: {
      top: "top",
      about: "about",
      focus: "focus",
      portfolio: "portfolio",
      contact: "contact",
    },

    nav: {
      about: "About",
      focus: "Focus",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Get in touch",
    },

    hero: {
      seeWork: "See my work",
      scroll: "see more ↓",
    },

    marquee: ["Livestreams", "Podcasts", "Shorts", "Reels"],

    aboutSection: {
      label: "About me",
      heading: "A good clip changes the way an idea reaches people.",
    },

    focusSection: {
      heading: "Clips made to reach more people.",
    },

    portfolioSection: {
      label: "Portfolio",
      heading: "Selected clips",
      body: "Work for channels with large audiences. Pick a channel and drag to browse the clips.",
      goToVideo: "Go to video",
    },

    contactSection: {
      label: "Let's work together",
      heading: "Got content that needs editing?",
      body: "Send me a message and let's turn your livestreams and podcasts into clips people watch to the end.",
    },

    emailCopied: "Email copied!",

    langSwitch: {
      label: "PT",
      href: "/",
      title: "Ler em português",
    },
  },
};
