# Projeto TFC - Trybe Futebol Clube! ⚽️

Este projeto é um `CRUD` de partidas de futebol utilizando `ORM`, aplicando princípios `SOLID` na construção de uma **API REST**.

---

### Partes desenvolvidas na aplicação :hammer:

⚠️ Todo o Back-end da aplicação foi desenvolvido por mim

⚠️ Todo o Front-end provido na aplicação, foi feito pelo time da [Trybe](https://www.betrybe.com)

---

## Tecnologias usadas :computer:

  * Node.js
  * Docker
  * Typescript
  * MySQL
  * ORM: Sequelize
  * Mocha / Chai / Sinon (Testes unitários)

---

### Como instalar as dependências

1. Clone o repositório
  * `git clone git@github.com:Vanim77/trybe-futebol-clube.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd project-trybe-futebol-clube`

2. Instale as dependências no Front-end e no Back-end
  * Entre na pasta do Front-end
  * `cd app/frontend`
  * `npm install`

  * Entre na pasta do Back-end
  * `cd app/backend`
  * `npm install`

---

### Variáveis de ambiente

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`project-trybe-futebol-clube/app/backend/src/database/config/database.ts`

```
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: TRYBE_FUTEBOL_CLUBE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
};
```

#### Chave JWT e criptografia de senhas:

⚠️ A chave `JWT` está inserida em `app/backend/jwt.evaluation.key` e foi carregada no backend com o uso da biblioteca `fs` apenas para exercitar, por medidas de segurança, não use uma chave `JWT` em um arquivo exposto.

⚠️ A biblioteca utilizada para criptografar a senha no banco de dados é a [bcryptjs](https://www.npmjs.com/package/bcryptjs).

---

### Dicas de comandos da aplicação

Para aplicação com Docker, utilize os comandos na pasta raíz:

  * `npm run compose:up` para subir a aplicação
  * `npm run compose:down` para excluir o container

---

### Docker-compose e Nodejs

⚠️ O seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui a documentação para atualizar o docker-compose.](https://docs.docker.com/compose/install/) ⚠️

⚠️ O seu [Node](https://nodejs.org/en/) precisa estar na versão 16. (No dockerfile utilizamos a imagem node:alpine 16).

---

### Banco de dados da aplicação

O banco de dados possui 3 tabelas:
  - Users
  - Clubs
  - Matchs

  ![Exemplo do banco de dados](./diagram.png)

---

### Iniciando a aplicação

Para iniciar sem o Docker, entre na pasta `frontend` e `backend` e execute o comando `npm start`.

Abra o navegador na URL `localhost:3000`

Navegue dentro da aplicação! ⚽️

![Exemplo da aplicação](./front-example.png)

---
