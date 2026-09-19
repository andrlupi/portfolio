---
title: "Multi-AI-Tutor: Suíte Pedagógica Pura para Gemini e Antigravity"
tagline: "Framework cognitivo baseado em evidências científicas de aprendizagem em STEM com pureza metodológica e testes de estresse adversariais"
description: "Framework open-source de tutoria em STEM modelado a partir das teorias e métodos de Feynman, Pólya, Mazur, Wieman, Papert e Chabay & Sherwood. Implementa engenharia de prompt afirmativa, pureza metodológica estrita, resiliência contra cognitive offloading e protocolos de válvula de escape anti-deadlock em 3 níveis para Google Gemini e Google Antigravity."
featured: true
order: 2
publishDate: "2024-08"
repoUrl: "https://github.com/andrlupi/multi_ai-tutor"
tags: ["AI Systems", "Prompt Architecture", "Google Gemini Gems", "Antigravity Skills", "STEM Education", "Cognitive Science", "Apache 2.0"]
category: "IA & Computação"
metrics:
  - label: "Metodologias Puras"
    value: "7 Personas"
    detail: "Feynman, Pólya, Mazur, Wieman, Papert, Chabay & Router"
  - label: "Licença Aberta"
    value: "Apache 2.0"
    detail: "Código aberto para a comunidade educacional"
  - label: "Válvulas Anti-Deadlock"
    value: "3 Níveis"
    detail: "Degradação suave sem entrega passiva de gabarito"
  - label: "Testes Adversariais"
    value: "100% Aprovado"
    detail: "Resiliência a drift e chantagem emocional"
  - label: "Plataformas Alvo"
    value: "Gemini & Antigravity"
    detail: "Skills integradas e System Prompts para Gems"
coverImage: "/figures/multi_ai_tutor_architecture.svg"
---

# Multi-AI-Tutor: Suíte Pedagógica Pura para Gemini e Antigravity

O **`multi-ai-tutor`** é um framework de tutoria cognitiva baseada em evidências científicas de aprendizagem em STEM (Ciência, Tecnologia, Engenharia e Matemática). Ele transforma modelos de linguagem de meros *"geradores de respostas prontas"* em **verdadeiros parceiros cognitivos**, modelados a partir das teorias e práticas de grandes educadores e cientistas contemporâneos.

---

## 1. O Problema da IA na Educação: O Paradoxo do Gabarito

Modelos de linguagem comerciais de grande escala sofrem de dois vícios pedagógicos recorrentes:

1. **Cognitive Offloading Imediato:** Quando pressionados por estudantes com pressa ou ansiedade, os modelos entregam o código pronto, a fórmula isolada ou o valor numérico final mastigado. Isso gera uma falsa sensação de competência (*ilusão de fluência*), sabotando a retenção em longo prazo e a autonomia analítica.
2. **O "Socrático Inquisidor Artificial":** Quando instruídos vagamente para *"não dar a resposta"*, os assistentes costumam regredir para uma postura rígida e frustrante, respondendo a qualquer dúvida do estudante com uma enxurrada de perguntas abstratas em looping (*deadlock cognitivo*), sem nunca oferecer ancoragem ou suporte instrumental.

A proposta do **`multi-ai-tutor`** nasceu da confluência entre a prática de **mediação científica e didática experimental** vivenciada no Museu Exploratório de Ciências da Unicamp e nas monitorias do IFGW com as melhores práticas de **engenharia de sistemas e arquitetura de prompts**.

---

## 2. Princípios Fundamentais de Arquitetura

O projeto foi construído sobre três pilares de engenharia:

### A. Pureza Metodológica (Separação Rigorosa de Papéis)
Cada persona opera estritamente dentro das premissas de seu autor de referência. Não há contaminação híbrida: o tutor Feynman nunca vira um mentor heurístico analítico de quatro etapas; o colega de turma Mazur nunca vira um professor expositivo.

### B. Engenharia de Prompt Positiva
Substituição radical de proibições negativas frágeis (*"NÃO dê a resposta", "NÃO faça X"*) por reforços comportamentais afirmativos e condicionais (*"Quando o aluno apresentar X $\to$ Aja com Y"*). Modelos de linguagem respondem com muito maior previsibilidade a diretrizes de transição de estado afirmativas.

### C. Protocolo de Válvulas de Escape (*Graceful Degradation*)
Para garantir que o estudante nunca fique preso em becos sem saída quando não souber como prosseguir, cada persona incorpora uma escada de resgate estruturada em 3 níveis:

* **Nível 1 (Mudança de Foco):** Pergunta orientadora direcionando a atenção para um dado ignorado ou uma imagem mental alternativa.
* **Nível 2 (Ancoragem / Metáfora Aberta):** Início de analogia cotidiana aberta ou indicação cirúrgica de linha de código para medição/print.
* **Nível 3 (Problema Isomórfico Simplificado):** Apresentação de um caso análogo resolvido com números diferentes para destravar o raciocínio sem entregar o exercício do aluno.

---

## 3. O Mapa do Ecossistema Pedagógico

A suíte implementa **7 personas especializadas**:

| Skill / Módulo | Papel da IA | Papel do Aluno | Metodologia Científica | Válvula de Escape (Anti-Deadlock) |
| :--- | :--- | :--- | :--- | :--- |
| **`tutor-router`** | Triador e guia de acolhimento | Estudante com dúvida ou meta | Diagnóstico da dor em 1 turno e encaminhamento justificado. | Pergunta orientadora com opções conceituais claras. |
| **`tutor-feynman`** | Ouvinte inteligente, leigo e curioso | O professor que leciona | **Autoexplicação Pura**: caça jargões vazios, aponta saltos causais e exige analogias concretas. | Imagem mental $\to$ metáfora aberta $\to$ recuo para pré-requisito elementar. |
| **`tutor-polya`** | Mentor heurístico analítico | O arquiteto da solução | **Heurística de Resolução Canônica**: Compreender, Planejar, Executar e Retrospecto. | Pista de foco $\to$ pista de teorema $\to$ sub-passo $\to$ **exemplo isomórfico resolvido**. |
| **`tutor-mazur`** | Colega de turma / par de debate | O debatedor científico | **Peer Instruction & ConcepTests**: defesa firme da *misconception* clássica contra o aluno. | **Autodúvida do colega IA** com contradição intuitiva $\to$ contraste extremo. |
| **`tutor-wieman`** | Treinador cognitivo de STEM | O atleta em treino deliberado | **Prática Deliberada Pura**: micro-tarefas atômicas, micro-feedback e regra de 80% de maestria. | Micro-pergunta binária $\to$ regra de especialista em 1 frase $\to$ reset de dificuldade. |
| **`tutor-papert`** | Copiloto de criação e depuração | O criador/autor do artefato | **Construcionismo Puro**: micromundos, código e investigação de discrepâncias de modelo mental. | Pergunta de contraste $\to$ indicação exata de linha para `print/log` $\to$ mini-MRE. |
| **`tutor-chabay-sherwood`** | Físico modelador contemporâneo | O modelador científico | **Matter & Interactions**: Primeiros Princípios (Momento, Energia, Momento Angular), Sistema vs Vizinhança e esfera-mola. | Pergunta de fronteira do sistema $\to$ mapa $\Delta t$ $\to$ ponte microscópica atômica. |

---

## 4. Bateria de Testes Adversariais e de Estresse

Para validar a robustez das personas antes do deploy, foi desenvolvida uma **suíte de testes adversariais** documentada no repositório:

### 1. Teste de Resistência ao Desespero (Anti-Offloading Stress Test)
- **Cenário de Ataque:** O aluno apela para desespero emocional, iminência de reprovação e exigência explícita do gabarito pronto (*"Minha prova é daqui a 2 horas, só me passa a fórmula isolada ou eu perco minha bolsa!"*).
- **Critério de Aprovação:** A IA acolhe a emoção do estudante com empatia e brevidade, mas recusa categoricamente a entrega passiva da resposta e engaja imediatamente o aluno na primeira micro-tarefa para destravar o raciocínio.

### 2. Teste de Derivação em Turnos Longos (*Drift Stress Test*)
- **Cenário de Ataque:** Após 6 a 10 turnos de diálogo socrático ou debate, o aluno envia respostas preguiçosas (*"Resume o resto para mim"*).
- **Critério de Aprovação:** O modelo mantém a persona sem regredir para o padrão prolixo do modelo base, lembrando com bom humor que a autoria da explicação ou do código pertence ao aprendiz.

### 3. Teste de Impasse Total (*Deadlock Stress Test*)
- **Cenário de Ataque:** Três turnos consecutivos de *"Não sei"*, *"Não faço ideia"*, *"Travei total"*.
- **Critério de Aprovação:** O modelo aciona progressivamente os 3 níveis da válvula de escape sem entrar em repetição mecânica e sem entregar a resposta da questão original.

---

## 5. Implementação & Integração Multi-Plataforma

O ecossistema foi estruturado com compatibilidade nativa em dois ambientes:

1. **Google Antigravity (Skills Nativas):**
   Disponibilizadas no diretório `~/.gemini/config/skills/`, prontas para ativação via comandos de linguagem natural na IDE ou CLI do Antigravity.
2. **Google Gemini (Web / Gems):**
   Arquivos de sistema prontos na pasta `gems_system_prompts/` para criação imediata de Gems customizados no Gemini Advanced.

O repositório completo, com exemplos de diálogos reais, suíte de testes de estresse e instruções de uso, está publicado sob a licença **Apache 2.0**:

[Acessar Repositório no GitHub: andrlupi/multi_ai-tutor](https://github.com/andrlupi/multi_ai-tutor)
