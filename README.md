# Desafios de PWA

Esse projeto contém um site estático bem simples. A ideia é transformá-lo em uma PWA
e aplicar algumas APIs bacanas pelo caminho.

## 0

Clone o projeto e disponibilize a pasta num servidor HTTP local. *(`file://` não vai permitir a gente fazer algumas coisas)*

## 1 

Criar um `manifest.json` e um ServiceWorker vazio. Faça a instalação dele via o arquivo `install.js`.
O `<link>` já está em todos os arquivos HTML pra facilitar.

Com isso, você já deve conseguir instalar a PWA no device.

## 2

Implementar ServiceWorker servindo conteúdo estático offline. Aproveite o `ARQUIVOS.TXT` que já tem uma lista de todos os arquivos padrões do projeto pra você cachear.

*(Bônus: usar o novo [WorkboxJS](https://workboxjs.org/) do Google)*

## 3 

Transformar numa SPA com navegação Ajax e History API.

Faça isso no arquivo `spa.js`. Dá pra fazer com jQuery basicão. Mas fique a vontade pra usar algum framework.

## 4 

Fallbacks para iOS: meta tags da Apple & AppCache.

As meta tags faça apenas na home, pelo `index.html`.

O AppCache já possui a chamada em todos os HTML pra facilitar. Use o nome do arquivo como `appcache.manifest`

## 5

Faça uma análise pelo Chrome Dev Tools na aba *Application*. Por lá, você vê o manifesto, dispara a instalação e analisa o service worker.

Instale também o Lighthouse no seu Chrome e faça uma análise da PWA.

## 6

Desabilite o pagamento se estiver offline. 

*Pra pensar: O que é "estar offline"? Usar timeouts? Pesquise a Network Info API.*

## 7

Implemente uma notificação do sistema na página de confirmação de pagamento ao invés do `alert` no `pagamento.js`. Use a *Notifications API*.

## 8

Use a [Payment Request API](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/deep-dive-into-payment-request) na tela de pagamento.



----

Algumas dessas coisas estão funcionando no [repositório oficial do projeto](https://github.com/sergiolopes/shopping). Você pode também [acessar direto no dispositivo](https://sergiolopes.github.io/shopping/).