# Blogs api

This is a solution to the Blogs API challenge on [Trybe](https://www.betrybe.com/)

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)

  - [Links](#links)

  - [Endpoints](#endpoints)

- [Author](#author)

## Overview

### The challenge

- Create and associate tables using sequelize models

- Build endpoints to consume the models you create

- CRUD with the ORM

### Links

- Api URL: [https://blogs-api-project.herokuapp.com/](https://blogs-api-project.herokuapp.com/)

### Endpoints

<details>
  
  <summary><h4>POST /user<h4></summary>

- Add a new user to your database table

- body format:

```json
{
  "displayName": "Brett Wiltshire", //rules: required, unique, min: 8 chars

  "email": "brett@email.com", //rules: required, email format

  "password": "123456", //rules: required, min: 6 chars

  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png" //required
}
```

- answer format:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

  </details>
  
<details>
  
  <summary><h4>POST /login<h4></summary>

- Log into the application

- body format:

```json
{
  "email": "email@mail.com", //rules: required, exist in the database

  "password": "123456" //rules: required, match with the email
}
```

- answer format:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

</details>

<details>
  
  <summary><h4>GET /user<h4></summary>

- Get all users

- header format:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8" //rules: required, token created after login or after creating a new user
}
```

- answer format:

```json
[
  {
    "id": "401465483996",
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
]
```

</details>
  
<details>
  
  <summary><h4>GET /user/:id<h4></summary>

- Get the user based on the id

- header format:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8" //rules: required, token created after login or after creating a new user
}
```

- answer format:

```json
{
  "id": "401465483996",

  "displayName": "Brett Wiltshire",

  "email": "brett@email.com",

  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png",

  "createdAt": "2022-04-26T17:28:16.025Z",

  "updatedAt": "2022-04-26T17:28:16.025Z"
}
```

</details>
    
<details>
  
  <summary><h4>POST /categories<h4></summary>

- Add a new category

- header format:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8" //rules: required, token created after login or after creating a new user
}
```

- body format:

```json
{
  "name": "Inovação" //rules: required
}
```

- answer format:

```json
{
  "id": 3,

  "name": "Inovação",

  "createdAt": "2022-04-26T17:28:16.025Z",

  "updatedAt": "2022-04-26T17:28:16.025Z"
}
```

</details>
  
<details>
  
  <summary><h4>GET /categories<h4></summary>

- Get all categories

- header format:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8" //rules: required, token created after login or after creating a new user
}
```

- answer format:

```json
[
  {
    "id": 1,

    "name": "Escola",

    "createdAt": "2022-04-26T17:28:16.025Z",

    "updatedAt": "2022-04-26T17:28:16.025Z"
  },

  {
    "id": 2,

    "name": "Inovação",

    "createdAt": "2022-04-26T17:28:16.025Z",

    "updatedAt": "2022-04-26T17:28:16.025Z"
  }
]
```

</details>

<details>
  
  <summary><h4>POST /post<h4></summary>

- Add a new post

- header format:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8" //rules: required, token created after login or after creating a new user
}
```

- body format:

```json
{
  "title": "Latest updates, August 1st", //rules: required

  "content": "The whole text for the blog post goes here in this key", //rules: required

  "categoryIds": [1, 2] //rules: required
}
```

- answer format:

```json
{
  "id": 4,

  "userId": 1,

  "title": "Latest updates, August 1st",

  "content": "The whole text for the blog post goes here in this key",

  "createdAt": "2022-04-26T17:28:16.025Z",

  "updatedAt": "2022-04-26T17:28:16.025Z"
}
```

</details>
  
<details>
  <summary><h4>GET /post<h4></summary>

- Get all posts

- header format:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8" //rules: required, token created after login or after creating a new user
}
```

- answer format:

```json
[
  {
    "id": 1,

    "title": "Post do Ano",

    "content": "Melhor post do ano",

    "userId": 1,

    "published": "2011-08-01T19:58:00.000Z",

    "updated": "2011-08-01T19:58:51.000Z",

    "user": {
      "id": 1,

      "displayName": "Lewis Hamilton",

      "email": "lewishamilton@gmail.com",

      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2017_Malaysia.jpg",

      "createdAt": "2022-04-26T17:28:16.025Z",

      "updatedAt": "2022-04-26T17:28:16.025Z"
    },

    "categories": [
      {
        "id": 1,

        "name": "Inovação",

        "createdAt": "2022-04-26T17:28:16.025Z",

        "updatedAt": "2022-04-26T17:28:16.025Z"
      }
    ]
  }
]
```

</details>
  
<details>
    <summary><h4>GET /post/:id<h4></summary>

- Get a post based on id

- header format:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8" //rules: required, token created after login or after creating a new user
}
```

- answer format:

```json
{
  "id": 1,

  "title": "Post do Ano",

  "content": "Melhor post do ano",

  "userId": 1,

  "published": "2011-08-01T19:58:00.000Z",

  "updated": "2011-08-01T19:58:51.000Z",

  "user": {
    "id": 1,

    "displayName": "Lewis Hamilton",

    "email": "lewishamilton@gmail.com",

    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",

    "createdAt": "2022-04-26T17:28:16.025Z",

    "updatedAt": "2022-04-26T17:28:16.025Z"
  },

  "categories": [
    {
      "id": 1,

      "name": "Inovação",

      "createdAt": "2022-04-26T17:28:16.077Z",

      "updatedAt": "2022-04-26T17:28:16.077Z"
    }
  ]
}
```

</details>
  
<details>
      <summary><h4>PUT /post/:id<h4></summary>

- Update a post based on id

- header format:

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8" //rules: required, token created after login or after creating a new user
}
```

- body format:

```json
// rules: be the user creator

{
  "title": "Latest updates, August 1st", //rules: required

  "content": "The whole text for the blog post goes here in this key" //rules: required
}
```

- answer format:

```json
{
  "userId": 1,

  "title": "Latest updates, August 1st",

  "content": "The whole text for the blog post goes here in this key",

  "categories": [
    {
      "id": 1,

      "name": "Escola",

      "createdAt": "2022-04-26T17:28:16.025Z",

      "updatedAt": "2022-04-26T17:28:16.025Z"
    }
  ]
}
```

</details>
  
<details>
      <summary><h4>DELETE /post/:id<h4></summary>

- Delete a post based on id

- answer format:

```

No body returned for response

```

</details>
        
<details>
      <summary><h4>DELETE /user/me<h4></summary>

- Delete the actual user logged in

- answer format:

```

No body returned for response

```

</details>
        
<details>
      <summary><h4>GET /post/search?q=searchTerm<h4></summary>

- Get a post based on a search term

- answer format:

```json
[
  {
    "id": 2,

    "title": "Vamos que vamos",

    "content": "Foguete não tem ré",

    "userId": 1,

    "published": "2011-08-01T19:58:00.000Z",

    "updated": "2011-08-01T19:58:51.000Z",

    "user": {
      "id": 1,

      "displayName": "Lewis Hamilton",

      "email": "lewishamilton@gmail.com",

      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },

    "categories": [
      {
        "id": 2,

        "name": "Escola"
      }
    ]
  }
]
```

</details>

## Author

- Linkedin- [Gabriel Pinheiro](https://www.linkedin.com/in/gabrielfmpinheiro/)

- Email - g.felippe5965@gmail.com
