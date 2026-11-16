# Moreira | Sites & Sistemas

Site institucional de um estúdio de desenvolvimento web sob medida: sites institucionais, sistemas
de gestão e plataformas digitais.

**Demo:** https://moreira-sites-sistemas.vercel.app

## O que tem

- Seções de serviços, processo de trabalho, diferenciais, projetos, tecnologias, perguntas frequentes e contato
- Barra de ações fixa no celular, com contato a um toque
- Animações de entrada com Framer Motion, que respeitam a preferência de movimento reduzido do sistema
- Fontes servidas pelo próprio site (Fontsource), sem depender de serviços externos
- Metadados para compartilhamento (Open Graph) e dados estruturados no `index.html`

## Stack

- React 18, TypeScript e Vite
- CSS Modules, um arquivo por componente
- Framer Motion e Lucide (ícones)
- Vercel

## Como executar

Requer Node.js 18 ou mais recente.

```bash
npm install
npm run dev
```

| Comando           | Descrição                                      |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento                    |
| `npm run build`   | Checagem de tipos (`tsc -b`) e build em `dist/` |
| `npm run preview` | Serve o build de produção localmente           |

## Estrutura

```
src/
  components/   peças reutilizáveis (Button, Header, Footer, MobileActionBar, Reveal, ...)
  sections/     seções da página (Hero, Services, Process, Projects, FAQ, Contact, ...)
  data/         textos e listas do site (content.ts)
  lib/          configurações de animação (motion.ts)
  index.css     estilos globais e variáveis de tema
```

Os textos ficam em `src/data/content.ts`: para alterar serviços, projetos ou perguntas, edite esse arquivo.
