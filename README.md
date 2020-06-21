# Fast&Food'ios

Um serviço de coleta de produtos que estão perto para vencer. O mercado cadastra uma solicitação com o produto, data de validade e local. O coletor recebe essas solicitações e podem pegá-las ou ignorá-las.

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

### Banco de Dados

Utilizado um container MySQL docker para persistir os dados. Se não quiser utilizar, altere o arquivo `./back-end/src/config/database.js` com a conexão do banco local.

Na raiz do projeto, dê esse comando se tiver o `docker-compose` instalado:

```
docker-compose up
```

Agora é necessário criar as tabelas e os dados de exemplo, estou utilizando o `Sequelize` como ORM:

```
cd back-end
npx sequelize db:migrate  # cria todas as tabelas
npx sequelize db:seed:all  # cria todos os registros 
```

### Requirements

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


### Ferramentas

- Node.js
- Vue.js
- MySQL
- Docker

### API Endpoints

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

GET - `/orders/market/{market_id}` - Lista as solicitações por Id do mercado

GET - `/orders/status/{status}` - Lista as solicitações por Id do status

POST - `/orders` - Criar uma solicitação

PATCH - `/orders/{order_id}` - Associar soliação ao coletor

## Contributors

* **Matheus Mazoni** - [MMazoni](https://github.com/MMazoni)