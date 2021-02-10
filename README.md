# express-mysql-sequalize-crud

Integrating Nodejs + Express + Mysql with help of sequelize

## Packages Required

```
express
mysql2
sequelize
sequelize-cli
nodemon
```

## Steps to run:

1. Install all packages

```
npm i
```

2. Go to config.json from config folder and change the credentials

```
"development": {
    "username": "your_mysql_user",
    "password": "your_mysql_pass",
    "database": "your_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```

3. Install nodemon globally for running dev script

```
npm i -g nodemon
```

4. Run server

```
npm start
```

## Route references ( Use postman for testing )

1. Get All Todos:

```
localhost:3000/api/new
```

2. Get todo by id:

```
localhost:3000/api/find/${id}
```

3. Create new todo and pass the text in body

```
localhost:3000/api/new
```

4. Delete Todo:

```
localhost:3000/api/delete/${id}
```

5. Update todo and pass the new text in body

```
localhost:3000/api/update/${id}
```

```
node_modules
├──  config
│  └── config.json
├── controllers
│  ├── createNewTodo.js
│  ├── deleteTodoById.js
│  ├── getAllTodos.js
│  ├── getTodoById.js
│  └── updateTodoById.js
├── models
│  ├── index.js
│  └── todo.js
├── package-lock.json
├── package.json
├── README.md
├── routes
│  └── apiRoutes.js
└── server.js
```
