# RESTFul API with NodeJS, Express, MongoDB and TypeScript
> Basic source document : [How to Build a Todo App with React, TypeScript, NodeJS, and MongoDB](https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#create-a-todo-type)
## Project Directory Structure
```
├── dist
├── node_modules
├── src
│  ├── app.ts
│  ├── controllers
│  │  └── todos
│  │     └── index.ts
│  ├── models
│  │ └── todo.ts
│  ├── routes
│  │  └── index.ts
│  └── types
│     └── todo.ts
├── docker-compose.yaml
├── nodemon.json
├── package.json
├── tsconfig.json
└── yarn.lock
```

# Setting up
## MongoDB(Docker)
```bash
$ docker-compose up -d
$ docker exec -it mongo-db bash
```
```bash
# mongo admin -u root -p 1q2w3e4r
```
```bash
> use Todo
> db.createUser({ user: 'admin', pwd: '1q2w3e4r', roles: ['dbAdmin','readWrite'] })
```

## NodeJS, Express, MongoDB and TypeScript
### NodeJS
```bash
$ brew install node
$ node -v
```
OR
* Download Install : https://nodejs.org/ko/

### yarn
```bash
$ npm install -g yarn
$ yarn init
```
### TypeScript, Express, Mongoose ...
```bash
$ yarn add typescript -g
$ yarn add express cors mongoose
$ yarn add -D @types/node @types/express @types/mongoose @types/cors
$ yarn add -D concurrently nodemon
```
```bash
$ yarn start
```
