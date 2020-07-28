## Configuração do servidor com Express

O primeiro passo é criar uma pasta src, dentro dessa pasta, é criado uma nova pasta chamada config, que é onde irá ficar a configuração do servidor. Nesta pasta config, é criado um arquivo chamado server.js, que é a configuração realativo ao express, para alocar uma porta para startar o servidor, e apartir dele, fazer as publicações de web servers.


Logo depois, fora da pasta config, dentro de src, é criado um arquivo chamado louder.js. Esse arquivo louder.js, é onde irá fazer o require do arquivo server.js, ou seja, é simplesmente onde vai carregar os principais arquivos de configuração, então, dentro de louder.js, é feito o require do server.js dentro da pasta config.

```js
require('./config/server.js');
```

### Configuração do server.js

O arquivo server, é a configuração realativo ao express, então, podemos fazer a configuração para alocar uma porta ao servidor, para startar e assim fazer as publicações de web servers.

Para alocar uma porta, usa-se uma const chamada port e definimos o valor dela, com o número da porta. Nesse caso, usei a porta 3003.

```js
const port = 3003;
```

Agora, é preciso usar o parser, para que seja traduzido para uma estrutura de dados.

Isso é feito o bodyParser, para traduzir o corpo da requisição, então se for, por exemplo, um formulário que tem um padrão realativo a url encode, ele faz o parser desse formulário.

Para fazer isso, também é criado uma constante chamada bodyParser, fazendo o require de body-parser.

```js
const bodyParser = require('body-parser');
```

Agora é preciso colocar o express e criar uma instância do express para startar o express, e associa-lo a uma variavel server. 

```js
const express = require('express');
const server = express();
```

Uma vez que é criado uma instância do express, é aplicado alguns middleware.

O primeiro middleware a ser aplicado é o bodyParser.urlenconded, que está sendo configurado pra sempre que chegar uma requisição que o padrão urlencoded, que é o padrão usado para submissão de formulários, transforme esse padrão em um objeto. Também é preciso habilitar o extends para que extenda os tipos de dados do que o padrão do urlenconded.

```js
server.use(bodyParser.urlenconded({extended: true}));
```

O próximo middleware, é o bodyParser.json, que também é aplicado para que todas as requisisões chegar no servidor.

```js
server.use(bodyParser.json());
```

Agora, é preciso registrar a port que é declarada anteriormente, no meu caso a porta 3003.

Caso de tudo certo, e tenha conseguido registrar, irá aparecer no console o backend, que foi executado corretamente.

```js
server.listen(port,function() {
    console.log(`BACKEND is running on ${port}`)
});
```

Para ver o resultado, podemos ir no terminal e digitar o codigo:

```
npm run dev
```

Esse código, vai ir no arquivo package.json que configuramos, e rodar o script dev, que no caso é o "nodemon".

### Fazendo a conexão com banco de dados

Dentro da pasta config, vamos criar um arquivo chamado database.js, que é onde irá ser feita a configuração com o mongo.

Nesse arquivo colocamos uma referência para o mongoose, que irá fazer tanto o mapeamento dos objetos em JS para os documentos que vão para o mongo como tbm serve pra abrir uma conexão com o mongo mandando os comando para o mongo.
```JS
const mongoose = require('mongoose');
```

Colocamos agora uma substituição para dizer que o mongoose, 


### ODM e Criação API rest