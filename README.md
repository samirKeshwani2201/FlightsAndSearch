# Welcome to the Flight Services

## Project Setup:

- clone the project on your local
- Execute npm install on the same path as of your root directory of the downloaded project
- Create a .env file in the root directory and add the following enviroment variables -`PORT=3000`
- Inside the src/config create a config.json and add the following json :

```
{
"development": {
"username": <YOUR_DB_LOGIN_NAME>,
"password": <YOUR_DB_PASSWORD>,
"database": "Flights_Search_DB_DEV",
"host": "127.0.0.1",
"dialect": "mysql"
}
}

```

- Once you have added the db config as listed above,go to the src and execute 'npx sequelize db:create'

`npx sequelize db:migrate`

## Tables

### City : id ,name 

### Airport -> id ,name,address,city_id
    Relationship -> City has many airports & aiport belongs to a city (one to many )
    When we have one to many then the table having many doesnt store anything about one 
    But one has to store data of many 