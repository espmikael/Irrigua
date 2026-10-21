# Irrigua

Site/app pessoal para controlar a rega das plantas. Paleta oliva escuro com rosa e sálvia, tipografia Fraunces + Plus Jakarta Sans, símbolo da gota que é folha.

## O que já faz

- **Seu jardim de verdade:** adicionar, editar e remover plantas.
- **Base de espécies** (`especies.js`, 27 plantas comuns no Brasil): ao escolher a espécie, a Irrigua sugere de quanto em quanto tempo regar, ajustando pela luz do lugar (pouca, indireta ou muita), e mostra a ficha de cuidados no botão "i".
- **Fotos das espécies:** 6 vêm da pasta `fotos/`; as outras são buscadas no [iNaturalist](https://www.inaturalist.org) (foto principal de cada espécie, com autor e licença Creative Commons na ficha) e ficam guardadas no aparelho.
- **Fotos suas:** tire ou escolha uma foto sua. Se a espécie tiver foto padrão, você escolhe qual vai na capa. Sem foto sua, fica a da espécie.
- **Etiquetas no card:** luz que a espécie precisa (meia-sombra, luz indireta, sol) e se é pet friendly ou tóxica para cães e gatos.
- **Compartilhar:** gera um card 1080×1920 do seu jardim para os stories (botão Compartilhar, ao lado de Adicionar planta).
- **Rega:** "Reguei" com desfazer, plantas atrasadas em destaque, semana do jardim (em lista no celular), busca.
- **Dados salvos neste aparelho**, no próprio navegador. Use **Exportar backup** no rodapé de vez em quando e **Importar backup** para levar o jardim para outro aparelho.
- **Instalável como app** e funciona sem internet: no celular, "Adicionar à tela inicial".

## Arquivos

- `index.html` — o app.
- `especies.js` — base de espécies (dá para editar e acrescentar plantas).
- `sw.js`, `manifest.webmanifest`, `icon-*.png` — o que torna o site instalável e offline.
- `conceito.html` — a página de conceito: o nome, o símbolo, as cores e como a Irrigua funciona.
- `icone.svg` — o símbolo (gota que é folha).
- `fotos/` — fotos padrão de algumas espécies (projeto aberto [deilen](https://github.com/antonia-white/deilen), Kaggle/Unsplash; só para o protótipo).
- `design/` — telas no editor de design do Claude; o site não depende delas.

## Publicar

Settings › Pages › Source: **Deploy from a branch** › `main`, `/ (root)` › Save.
