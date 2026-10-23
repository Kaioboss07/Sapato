# Sapato

Bem-vindo ao repositório do site da **Escola Professor Abel Coelho**.

Este projeto é um site **PWA simples, rápido e responsivo** com foco em informações escolares e educação financeira para os alunos.

## Funcionalidades

- Página inicial com boas-vindas e atalhos para as seções.
- Seção de ajuda financeira (bolsas, benefícios, auxílios e oportunidades).
- Flashcards interativos de educação financeira (clique para revelar a resposta).
- Seção "Sobre a Escola".
- Navegação responsiva (menu em telas pequenas).

## Tecnologias

- HTML, CSS e JavaScript puros (sem frameworks).
- PWA com `manifest.webmanifest` e Service Worker (`sw.js`).
- Ícones PNG gerados em `icons/`.

## Como executar no Codespaces

Como o projeto é estático, basta servir a pasta raiz com qualquer servidor HTTP estático:

```bash
# Python (recomendado)
python3 -m http.server 8080

# ou Node
npx serve .
```

Depois abra no navegador: <http://localhost:8080>

Para testar como PWA (instalação e conteúdo offline), use um navegador com suporte
(Chrome/Edge) e acesse via `http://localhost` ou HTTPS.

## Estrutura

```
index.html          # Página principal
css/style.css       # Estilos
js/app.js           # Navegação, flashcards e PWA
manifest.webmanifest
sw.js               # Service Worker (cache offline)
icons/              # Ícones do aplicativo
abel.png             # Logotipo da escola (referenciado como ./abel.png)
```
