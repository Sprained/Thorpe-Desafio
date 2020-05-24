# Imersão pratica Thorpe Innovation!

### Pilares

------------

###### API
- Deve ser feita em Node.JS com banco de dados mongoDB;
- Deve permitir o cadastro de usuários com e-mail e senha;
- A senha deve ser salva como uma hash no banco de dados;
- Deve ser disponibilizado token de login e permitir que usuário se mantenha logado;
- Deve validar o token para que o usuário realize requisições;
- Deve permitir que o usuário envie informações para que sejam salvas no BD;
- Deve retornar informações necessárias para os aplicativos que consomem essa API.

###### WEB
- Deverá ser feito em React JS;
- Deverá ter Tela de Login com 02 inputs, para validar o e-mail e senha digitados através de uma requisição à API. Deverá ser retornado um erro caso o usuário não tenha permissão de logar;
- Deverá ter Tela de Cadastro. A tela irá recolher as informações necessárias para o cadastro: nome, e-mail e senha;
- Deverá ter Tela principal que irá conter 01 input para que novos itens sejam
 Adicionados. Será possível deletar itens da lista. Deverá fazer requisições à API passando o token de autenticação. As informações devem ser consumidas da API

######  MOBILE
- Deverá ser feito com React Native;
- Deverá ter as mesmas features e funcionalidades da página WEB acima;
- Deverá ter modulo para manipulação de imagem (conforme figura
 abaixo) para manipulação de foto extraída da biblioteca de fotos e/ou da câmera do dispositivo mobile (foto de perfil). A feature deverá ser capaz de manipular mesmo que minimamente a imagem. Exemplo: esticar o nariz, aumentar a boca, distorcer o olho, obrigatoriamente via touch. A ação deverá ser semelhante a filtros largamente utilizados no mercado. Pode ser utilizada library pronta. A funcionalidade ainda deverá guardar foto de antes e depois da manipulação conforme template abaixo

### Instruções

------------

Como o sistema se encontra em desenvolvimento, foi utilizado o NODEMON para facilitar e não precisar ficar restartando o backend, o tempo inteiro.
Antes de startar o sistema na pasta abra o console e coloque os seguintes comandos para baixar as dependências: `yarn` ou `npm i`.

Para startar o back-end, digite o seguinte comando: ` yarn dev` ou `npm dev`. Enquanto o front-end, utilize: ` yarn start` ou `npm start`

Para o mobile, antes de startar, precisa alterar o ip da API. Acesse o arquivo em `mobile/src/Services/Api.js` e modifique a base url `baseURL: 'http://IP_MAQUINA:3333'`, pois o expo quando emula no smartphone não reconhece por localhost e sim se tiver o ip da máquina.
Após isso, tendo o expo instalado no smartphone, coloque o comando abaixo: `expo start` e escaneie o QR CODE.

### Desenvolvimento

------------

A API foi feita basicamente no mesmo dia em que foi enviado a imersão. De início, a deixei bem simples, pois queria me concentrar no front-end, o qual não domino, então geralmente demora mais para poder finalizar. O mesmo foi feito entre sexta-feira e domingo, após sua conclusão, voltei para a API, onde fiz umas pequenas alterações de melhoria.

------------

###### API
Na construção da API utilizei NodeJS e MongoDB, como solicitado, e também fiz uso do Token JWT para realizar a autenticação, passando o mesmo pelo Header. O token JWT pode receber uma validade que quando a expirar o usuário seria desconectado, sendo necessário seu re-login para gerar um novo token de acesso. Um Middleware, também, foi implementado para verificar se o usuário está logado antes de conceder permissões para usar outras funcionalidades do sistema.

###### WEB
O desenvolvimento WEB foi realizado com o ReactJS, assim como solicitado, e seguiu o design anexado no desafio em questão. Por o front-end não ser a minha principal área, algumas coisas não saíram idênticas ao design enviado, como a largura do login e cadastro e usuários, porém aparentemente não encontra-se nenhum bug visual.

###### MOBILE
O React Native e Expo foram usados na construção do mobile, cujo o melhor possível foi feito, sem encontrar algum bug, e assim como no web, seguiu o design anexado ao desafio. A biblioteca consumida para a edição da imagem foi a do próprio Expo, a Expo-Image-Picker, porém, infelizmente, não atende completamente o solicitado.

### Desenvolvedor

------------

- [Gabriel Resende](https://github.com/Sprained "Gabriel Resende")
