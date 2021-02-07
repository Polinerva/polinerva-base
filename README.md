# Rando

A password generator built with React and Express.

This is a minimal demo of using Create React App to bootstrap a React project, connect the React app to an Express backend, and deploy the whole thing to Heroku.

Read the blog post: [Create React App with Express in
Production](https://daveceddia.com/create-react-app-express-production/)

----------------------------------------------------

## Database

//Variáveis para rodar localmente 

-- for Mac and Linux
export DATABASE_URL=postgres://$(whoami)
-- for Windows
set DATABASE_URL=postgres://$(whoami)

### Acessar o banco remotamente

heroku pg:psql postgresql-globular-48592 --app polinerva

### Coloque essas variáveis no .env

crie um arquivo .env e coloque essas variáveis:

```bash
  DATABASE_NAME=<nome_banco_de_dados>
  DATABASE_USER=<nome_usuário>
  DATABASE_PASSWORD=<senha_usuário>
  DATABASE_HOST=<nome_host>
  DATABASE_PORT=<porta_host>
```
