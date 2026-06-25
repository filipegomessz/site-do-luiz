# Site do Luiz Fernando — Editor de Cortes

Portfólio em Next.js 14 + Tailwind + Framer Motion.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Como editar o conteúdo

**Tudo fica em um arquivo só:** [`data/site.ts`](data/site.ts)

- **Foto:** coloque a imagem em `public/` (ex.: `public/luiz.jpg`) e mude `photo: "/luiz.jpg"`.
- **Links dos vídeos:** preencha o campo `url` de cada item em `portfolio` (link do Google Drive ou YouTube).
- **Capa dos vídeos (opcional):** coloque a imagem em `public/` e aponte em `thumb`.
- **E-mail, textos, canais, redes sociais:** todos editáveis no mesmo arquivo.

Enquanto `photo` e `url` estiverem vazios, o site mostra placeholders (iniciais / "Em breve").

## Deploy na Vercel

1. Importe o repositório do GitHub na [vercel.com](https://vercel.com).
2. A Vercel detecta Next.js automaticamente — só clicar em **Deploy**.
3. Nenhuma variável de ambiente é necessária.
