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

Como o sistema se encontra em desenvolvimento foi utilizado o nodemon para facilitar e não precisar ficar restartando o backend tempo inteiro.
Antes de startar o bakcend na pasta abra o console e coloque os seguintes comandos para baixar as dependências: `yarn` ou `npm i`.

Para startar o backend coloque o seguinte comando: ` yarn dev` ou `npm dev`.

Para baixar as dependências do frontend é igual do backend ja mostrado acima. Para startar o frontend segue o comando: ` yarn start` ou `npm start`

Para o mobile, antes de startar, precisa alterar o ip da api. Acesse o arquivo em `mobile/src/Services/Api.js` e modifique a base url `baseURL: 'http://IP_MAQUINA:3333'` pois o expo quando emula no smartphone não reconhece por localhost e sim se tiver o ip da máquina.
Após isso e tendo o expo instalado no smartphone coloque o comando abaixo: `expo start` e escaneie o qr code.

### Desenvolvimento

------------

A api foi feita basicamente no mesmo dia que foi enviado a imersão, de início deixando bem simples pois queria me concentrar no front, o qual não é a área que eu domino então geralmente demora mais para poder finalizar-lo.
Front foi feito entre sexta e domingo, após finalizar o front voltei para api e fiz umas pequenas alterações nela assim melhorando-a.

------------

###### API
No desenvolvimento como pedido foi utilizado node e mongo. Utilizei o token jwt para fazer a autenticação, passando esse token pelo header. Esse token pode ser colocado uma validade, assim quando expirar a pessoa seria desconectado tendo que logar novamente para poder validar um novo token.
Foi feito um middleware para verificar se o usuário o usuário está logado antes de conceder permissões para usar outras funcionalidades do sistema.

###### WEB
No desenvolvimento web foi utilizado o reactjs como solicitado. Seguindo o designer foi feito o front, o qual não é minha principal área portanto teve algumas coisa que não ficaram idênticas, como a largura do login e cadastro de usuário. Porém aparentemente não se encontra tendo nenhum bug visual.

###### MOBILE
Como no WEB utilizei as tecnologias pedidas seguindo o designer, foi feito melhor possível sem encontrar nenhum bug.
A biblioteca usada para edição da imagem foi do próprio expo, a Expo-Image-Picker, o qual infelizmente não atende completamente o que foi solicitado.

### Desenvolvedor

------------

- [Gabriel Resende](https://github.com/Sprained "Gabriel Resende")
