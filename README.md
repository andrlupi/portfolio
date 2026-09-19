# André Luiz Pianca — Portfólio (Astro + Tailwind CSS)

Portfólio pessoal e acadêmico de **André Luiz Pianca** — Físico e Engenheiro Físico (UNICAMP).

Construído sob a arquitetura **Astro 5 (SSG Zero-JS)** com **Tailwind CSS**, **Content Collections tipadas via Zod** e **Ilhas de Micro-Interatividade**.

---

## ⚡ Tecnologias & Arquitetura

- **Astro 5:** Geração de site estático (SSG) de alto desempenho sem overhead de JavaScript no carregamento inicial.
- **Tailwind CSS:** Paleta visual *Deep-Tech Dark Mode* customizada (tons de ardósia profunda, ciano criogênico e azul elétrico).
- **Astro Content Collections:** Validação estrita de esquemas com Zod (`src/content/config.ts`) para gestão modular de estudos de caso e projetos técnicos.
- **Micro-Simulador Criogênico:** Componente interativo em SVG para avaliação em tempo real de interfaces térmicas (Junta de Índio, Contato Seco e Gás de Troca de Hélio) da nanoestação da linha EMA do Sirius.
- **GitHub Actions CI/CD:** Pipeline automatizado de compilação estática e deploy contínuo para o GitHub Pages (`.github/workflows/deploy.yml`).

---

## 📂 Estrutura do Projeto

```text
portfolio/
├── .github/workflows/deploy.yml   # Deploy automatizado no GitHub Pages
├── public/
│   ├── favicon.svg                # Favicon quântico/criogênico
│   └── figures/                   # Gráficos CairoMakie de alta resolução
├── src/
│   ├── content/
│   │   ├── config.ts              # Validação Zod das coleções
│   │   └── projects/
│   │       └── ema-cryo.md        # Estudo de caso técnico da linha EMA/Sirius
│   ├── components/
│   │   ├── Header.astro           # Barra de navegação responsiva
│   │   ├── Footer.astro           # Rodapé técnico com ORCID, GitHub e contatos
│   │   ├── Hero.astro             # Apresentação de alto impacto e métricas
│   │   ├── SimulatorWidget.astro  # Micro-simulador térmico interativo
│   │   ├── ExperienceTimeline.astro # CNPEM, Museu Exploratório, Monitorias IFGW
│   │   ├── EducationCertifications.astro # UNICAMP, COTIL e Certificações
│   │   ├── SkillsStack.astro      # Métodos numéricos, Julia, CAD e idiomas
│   │   └── ProjectCard.astro      # Cartão de projeto reutilizável
│   ├── layouts/
│   │   └── Layout.astro           # Shell HTML com metadados SEO e Open Graph
│   └── pages/
│       ├── index.astro            # Landing Page principal
│       ├── sobre.astro            # Perfil detalhado, extracurriculares e CV
│       └── projetos/
│           ├── index.astro        # Catálogo geral de projetos
│           └── [slug].astro       # Roteamento estático dos estudos de caso
├── astro.config.mjs               # Configuração do Astro e Tailwind
├── tailwind.config.mjs            # Paleta de cores, tipografia e animações
└── package.json
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js:** versão 20+ ou 24+ LTS
- **npm:** versão 10+

### Instalação
```bash
npm install
```

### Desenvolvimento com Hot-Reload
```bash
npm run dev
```
Acesse `http://localhost:4321` no seu navegador.

### Compilação de Produção e Verificação de Tipos
```bash
npm run build
```
O build estático compilado será gerado no diretório `dist/`.

### Pré-visualização do Build
```bash
npm run preview
```

---

## 📝 Como Adicionar Novos Projetos (Abas / Páginas)

Para adicionar um novo projeto (como o projeto do Tutor de IA ou futuras pesquisas):
1. Crie um novo arquivo Markdown dentro de `src/content/projects/nome-do-projeto.md`.
2. Preencha o frontmatter de metadados obrigatórios (validado pelo Zod):

```markdown
---
title: "Título do Seu Projeto"
tagline: "Uma frase de impacto resumindo a entrega"
description: "Descrição concisa dos desafios e soluções"
featured: false
order: 2
publishDate: "2025-01"
repoUrl: "https://github.com/andrlupi/seu-projeto"
tags: ["IA", "LLM", "Educação STEM", "Python"]
category: "IA & Computação"
metrics:
  - label: "Métrica 1"
    value: "Valor"
    detail: "Detalhe opcional"
---

# Conteúdo técnico em Markdown aqui...
```

3. O Astro gerará automaticamente a rota `/projetos/nome-do-projeto` no momento do build e o incluirá no catálogo de projetos.
