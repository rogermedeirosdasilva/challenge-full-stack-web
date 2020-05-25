GrupoA Educação - Full Stack Web Developer
===================

[![N|Solid](https://www.grupoa.com.br/hs-fs/hubfs/logo-grupoa.png?width=300&name=logo-grupoa.png)](https://www.grupoa.com.br) 

# Arquitetura
## API
Criada API RESTful em Node.js para a troca de dados entre a API e os Dados.

### Bibliotecas utilizadas
- **Express e CORS** - para o servidor
- **Sequelize / pg / sqlite3** - Sequelize para o acesso ao banco de dados, PG para acesso ao banco de dados PostgreSQL nos ambientes de desenvolvimento e produção, SQLITE3 no ambiente de teses.
- **Dotenv** - Dotenv para o gerenciamento dos ambientes de produção/desenvolvimento e teste.
- **JEST / Supertest** - Jest e supertest para os testes unitários.

## FrontEnd
Criado frontend em Vue.js.

### Bibliotecas utilizadas
- **Vuetify** - Framework de UI
- **Axios** - Biblioteca para comunicação http.
- **Vue-router** - Biblioteca para navegação entre rotas.
####
####
# Instruções
## Ambiente
Na pasta **environment** existem três arquivos **.env** (produção), **.env.dev** (desenvolvimento), **.env.test** (testes).

## Database Migrations
### Banco de dados SQLite para testes unitários
```bash
$ NODE_ENV=teste npx sequelize db:migrate
$ NODE_ENV=teste npx sequelize db:seed:all
```

### Banco de dados PostgreSQL produção

1. Criar o banco de dados **grupoa**

```bash
$ NODE_ENV=prod npx sequelize db:migrate
```

### Banco de dados PostgreSQL desenvolvimento

1. Criar o banco de dados **grupoa_teste**

```bash
$ NODE_ENV=dev npx sequelize db:migrate
```


## Execução de Testes unitários
```bash
$ npm run teste
```

# Melhorias

1. Melhoria de padronização de comunicação da interface de usuário, como mensagens e alerts.
2. Melhoria de componentes de entrada de dados.
3. Melhoria de componentização do frontend.
4. Melhoria e validações de dados no backend.
