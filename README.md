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
