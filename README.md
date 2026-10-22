# Irrigua

Site/app pessoal para controlar a rega das plantas. Abre no **modo claro** (creme, com o topo em oliva) e tem o **modo escuro** (oliva) a um toque, no seletor ☀ Claro | ☾ Escuro do topo. Paleta oliva com rosa e sálvia, tipografia Fraunces + Plus Jakarta Sans, símbolo da gota que é folha.

## O que já faz

- **Seu jardim de verdade:** adicionar, editar e remover plantas.
- **Base de espécies** (`especies.js`, 27 plantas comuns no Brasil): ao escolher a espécie, a Irrigua sugere de quanto em quanto tempo regar, ajustando pela luz do lugar (pouca, indireta ou muita), e mostra a ficha de cuidados no botão "i".
- **Fotos das espécies:** 6 vêm da pasta `fotos/`; as outras são buscadas no [iNaturalist](https://www.inaturalist.org) (foto principal de cada espécie, com autor e licença Creative Commons na ficha) e ficam guardadas no aparelho.
- **Fotos suas:** tire ou escolha uma foto sua. Se a espécie tiver foto padrão, você escolhe qual vai na capa. Sem foto sua, fica a da espécie.
- **Etiquetas no card:** luz que a espécie precisa (meia-sombra, luz indireta, sol) e se é pet friendly ou tóxica para cães e gatos.
- **Compartilhar:** três cards de story (1080×1920): *Meu jardim* (quantas plantas em dia, com as fotos), *As mais regadas* (ranking dos últimos 30 dias) e *Como eu cuido* (ficha de cuidados de uma planta, também pelo botão de compartilhar na ficha "i").
- **Adiar 1 dia:** para dias de chuva ou frio, sem mudar o intervalo.
- **Histórico e "como estava a terra?":** cada rega fica registrada na ficha. Depois de regar, você pode dizer se a terra estava muito seca, no ponto ou ainda úmida; com duas respostas iguais seguidas, a Irrigua sugere ajustar o intervalo.
- **Modo inverno** (nos Ajustes, ícone de engrenagem): espaça as regas em cerca de 30%.
- **Cômodos:** cada planta pode ter um cômodo, e o jardim filtra por cômodo.
- **Outros cuidados:** lembretes de adubar, girar o vaso e borrifar.
- **Lembrete diário no calendário** (Ajustes): baixa um evento que se repete todo dia, para você lembrar de abrir a Irrigua.
- **Aviso de backup** quando passar um mês sem salvar, e botão para remover as plantas de exemplo.
- **Regar por cômodo:** ao filtrar um cômodo, o botão "Reguei as N" rega todas as plantas com sede dele de uma vez.
- **Retorno ao regar:** a barra enche e o botão confirma com uma animação curta (desligada se o celular pede menos movimento).
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
