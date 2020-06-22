# Fast&Food'ios

Um serviço de coleta de produtos que estão perto para vencer. O mercado cadastra uma solicitação com o produto, data de validade e local. O coletor recebe essas solicitações e podem pegá-las ou ignorá-las.

#### Tela de boas vindas

![Welcome](https://trello-attachments.s3.amazonaws.com/5a9ae0207136de1a7071186c/5eea5c193ea4730190085d44/df57c15f63e15b3ce95004981c323c9b/Screenshot_2020-06-21_23-59-03.png)

#### Login

![Login](https://trello-attachments.s3.amazonaws.com/5a9ae0207136de1a7071186c/5eea5c193ea4730190085d44/ec227fa87981445399bdda420a899745/Screenshot_2020-06-21_23-59-53.png)

#### Cadastro

![Cadastro](https://trello-attachments.s3.amazonaws.com/5a9ae0207136de1a7071186c/5eea5c193ea4730190085d44/3dd2e94067cb5f251e82c9454f8fa523/Screenshot_2020-06-22_00-46-15.png)


#### Listagem de Produtos

![Lista de Produtos](https://trello-attachments.s3.amazonaws.com/5a9ae0207136de1a7071186c/5eea5c193ea4730190085d44/0c4d734a740930b6fa7542a88af73dda/Screenshot_2020-06-22_00-33-37.png)

#### Listagem de Produtos ao Coletor

![Produtos a coletar](https://trello-attachments.s3.amazonaws.com/5a9ae0207136de1a7071186c/5eea5c193ea4730190085d44/93fb89750d85f4dfbaa1ea7b3359a57b/Screenshot_2020-06-22_00-34-30.png)

## Project setup

#### Back-end

Abra um terminal na pasta do projeto e dê o comandos abaixo:

```
cd back-end
npm install
npm start
```

#### Front-end

Abra outro terminal na pasta do projeto e dê o comandos abaixo:

```
cd front-end
npm install
npm run dev
```

Obs: Faça nessa ordem, pois o front-end tem que está na porta 8081

Digite no navegador `localhost:8081` para acessar o site.

## DB

Utilizado um container MySQL docker para persistir os dados. Se não quiser utilizar, altere o arquivo `./back-end/src/config/database.js` com a conexão de seu banco local.

Na raiz do projeto, dê esse comando se tiver o `docker-compose` instalado:

```
docker-compose up
```

Agora é necessário criar as tabelas e os dados de exemplo, estou utilizando o `Sequelize` como ORM:

```
cd back-end
npx sequelize db:migrate  # cria todas as tabelas
npx sequelize db:seed:all  # cria todos os registros de status e role
```

Para criar usuários ou solicitações será necessário fazer manualmente pelo cliente ou pela API.

## Requirements

É preciso ter o [nodejs](https://nodejs.org/en/download/), para instalar todas as dependências.

#### Back-end

- express
- sequelize
- sequelize-cli
- mysql2
- jsonwebtoken
- cors
- consign
- bcryptjs
- nodemon

#### Front-end

- vue
- vue-cli
- axios
- vue-router
- moment
- bootstrap
- jquery
- popper.js
- node-sass
- sass-loader
- vue-template-compiler

## Tools

- Node.js
- Vue.js
- MySQL
- Docker

## API Endpoints

#### User

GET - `/users` - Lista todos os usuários

GET - `/users/{user_id}` - Exibe usuário por Id

POST - `/users/roles/{role_id}` - Exibe usuários por Id do Perfil

POST - `/users/login` - Login do usuário

#### Role

GET - `/roles` - Lista todos os perfis

POST - `/roles` - Criar um perfil

#### Market

GET - `/markets` - Lista todos os mercados

GET - `/markets/{market_id}` - Exibe um mercador por Id

#### Courier

GET - `/couriers` - Lista todos os coletores

GET - `/couriers/{courier_id}` - Exibe um coletor por Id

#### Order

GET - `/orders` - Lista todas as solicitações

GET - `/orders/user/{user_id}` - Lista as solicitações por Id do usuário(Mercados)

GET - `/orders/status/{status_id}` - Lista as solicitações por Id do status

GET - `/orders/courier/{user_id}` - Lista as solicitações por Id do usuário(Coletor) com status em andamento

POST - `/orders` - Criar uma solicitação

PATCH - `/orders/{order_id}` - Associar soliação ao coletor

## Contributors

* **Matheus Mazoni** - [MMazoni](https://github.com/MMazoni)