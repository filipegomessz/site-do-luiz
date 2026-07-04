/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exporta o site como HTML estático em /out (necessário p/ GitHub Pages)
  output: "export",
  // GitHub Pages não tem servidor de otimização de imagem
  images: { unoptimized: true },
  // Serve cada rota como pasta/index.html (mais confiável no Pages)
  trailingSlash: true,
};

export default nextConfig;
