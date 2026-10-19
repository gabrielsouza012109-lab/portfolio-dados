# Portfólio — Gabriel Amadai de Souza

Meu Portfólio pessoal, analista de dados, BI e Supply Chain. Construído com React, TanStack Start e Tailwind CSS.

## Executar localmente

Instale [Bun](https://bun.sh), depois execute:

```bash
bun install
bun run dev
```

## Publicar no GitHub Pages

O fluxo `.github/workflows/deploy.yml` publica automaticamente a versão estática quando houver um envio para a branch `main`.

1. Envie o projeto para o repositório `gabrielsouza012109-lab/portfolio-dados` no GitHub.
2. No GitHub, acesse **Settings → Pages → Build and deployment** e selecione **GitHub Actions** como origem.
3. Execute **Actions → Publish portfolio to GitHub Pages → Run workflow**, ou faça um novo envio para `main`.
4. O endereço esperado é `https://gabrielsouza012109-lab.github.io/portfolio-dados/`.

O caminho `/portfolio-dados/` é configurado pela variável `GITHUB_PAGES` durante a publicação. Se optar por outro nome de repositório, ajuste o caminho em `vite.config.ts`. A foto, o currículo e a imagem de compartilhamento ficam em `public/` e são servidos junto com o site.
