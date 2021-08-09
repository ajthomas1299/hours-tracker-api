# Strapi application

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/bc13a572a468c6c595c7?action=collection%2Fimport)

A quick description of your strapi application

```bash
  npm install
  npm run start # Runs on http://localhost:1337
```

# API usage and endpoints

## Register a user [POST auth/local/register]

- Request to add new user

  - Headers
          Content-Type application/json
  - Body

          {
              "username: "",
              "email": "",
              "password": ""
          }

- Response: 200 application/json
  - Body

          {
              "jwt": "",
              "user": {
                      "id": ,
                      "username": "",
                      "email": "",
                      "provider": "",
                      "confirmed": ,
                      "blocked": ,
                      "role": {
                          "id": ,
                          "name": "",
                          "description": "",
                          "type": ""
                      },
                      "created_at": "2021-08-09T17:16:52.716Z",
                      "updated_at": "2021-08-09T17:16:52.729Z",
                      "clients": []

          }







## Login a user [POST auth/local]

- Request to login user

  - Headers
          Content-Type application/json
  - Body

          {
          "identifier": "",
          "password": ""
          }

  - Response: 200 application/json

  - Response application/json

  - Body
          {
              "jwt": "",
              "user": {
                      "id": ,
                      "username": "",
                      "email": "",
                      "provider": "",
                      "confirmed": ,
                      "blocked": ,
                      "role": {
                          "id": ,
                          "name": "",
                          "description": "",
                          "type": ""
                      },
                      "created_at": "2021-08-09T17:16:52.716Z",
                      "updated_at": "2021-08-09T17:16:52.729Z",
                      "clients": []

          }

## Login a users clients [GET clients/me]

- Request to get all client belonged to the current user

  - Headers
          Content-Type application/json
          Authorization: `Bearer ${token}`
  - Body

          {

          }

  - Response: 200 application/json

  - Response application/json

  - Body
          {
              [
                  {
                      "id": 3,
                      "name": "test",
                      "user": {
                          "id": 3,
                          "username": "Tommy Kelly",
                          "email": "tommy_kelly@icloud.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "role": 1,
                          "created_at": "2021-08-08T23:26:04.415Z",
                          "updated_at": "2021-08-09T09:04:03.730Z"
                      },
                      "published_at": "2021-08-08T23:18:03.706Z",
                      "created_at": "2021-08-08T23:14:51.248Z",
                      "updated_at": "2021-08-09T09:04:03.720Z"
                  },
                  {
                      "id": 5,
                      "name": "test3",
                      "user": {
                          "id": 3,
                          "username": "Tommy Kelly",
                          "email": "tommy_kelly@icloud.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "role": 1,
                          "created_at": "2021-08-08T23:26:04.415Z",
                          "updated_at": "2021-08-09T09:04:03.730Z"
                      },
                      "published_at": "2021-08-09T09:03:38.934Z",
                      "created_at": "2021-08-09T09:03:37.005Z",
                      "updated_at": "2021-08-09T09:04:03.720Z"
                  },


## Login a users client by ID [GET clients/me/:id]

- Request to get all client belonged to the current user

  - Headers
          Content-Type application/json
          Authorization: `Bearer ${token}`
  - Body

          {

          }

  - Response: 200 application/json

  - Response application/json

  - Body
          {
              [
              {
                  "id": ,
                  "name": "",
                  "user": {
                      "id": ,
                      "username": "",
                      "email": "",
                      "provider": ",
                      "confirmed": ,
                      "blocked": ,
                      "role": ,
                      "created_at": "2021-08-08T23:32:42.102Z",
                      "updated_at": "2021-08-09T10:12:47.050Z"
                  },
                  "published_at": "2021-08-09T10:13:47.349Z",
                  "created_at": "2021-08-09T10:13:47.358Z",
                  "updated_at": "2021-08-09T10:13:47.367Z"
              }
          ]


## Login a users client by ID [POST clients]

- User to create a new client

  - Headers
          Content-Type application/json
          Authorization: `Bearer ${token}`
  - Body

          {
              "name": ""
          }

  - Response: 200 application/json

  - Response application/json

  - Body
          {
              "id": 11,
              "name": "",
              "user": {
                  "id": 4,
                  "username": "",
                  "email": "",
                  "provider": "",
                  "confirmed": ,
                  "blocked": l,
                  "role": ,
                  "created_at": "2021-08-08T23:32:42.102Z",
                  "updated_at": "2021-08-09T10:12:47.050Z"
              },
              "published_at": "2021-08-09T17:39:27.100Z",
              "created_at": "2021-08-09T17:39:27.111Z",
              "updated_at": "2021-08-09T17:39:27.123Z"
          }
