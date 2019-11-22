<<<<<<< HEAD
# BackEnd

[POST] Registration

URL: https://minimalist-homepage.herokuapp.com/api/auth/register

Payload: an object with the following.

=======
## Endpoints

### baseURL: https://minimalist-homepage.herokuapp.com


### POST Registration  | /api/auth/register             |
Payload: an object with the following.
```
>>>>>>> 1eba03dc30526844f3c4654330240cdc6f7de9e3
{
    "name": "test01",
    "email": "test01@gmail.com",
    "password": "password"
}
<<<<<<< HEAD

returns: an object with the user id, name, email, and password (encypted using bcrpyt to prevent hacking).

[POST] Login

URL: https://minimalist-homepage.herokuapp.com/api/auth/login

Payload: an object with the following.

=======
```
returns: an object with the user id, name, email, and password (encypted using bcrpyt to prevent hacking).                                                                                                       |
| 


### POST Login   | /api/auth/login |

Payload: an object with the following.
```
>>>>>>> 1eba03dc30526844f3c4654330240cdc6f7de9e3
{
   "name": "test01",
    "password": "password"
}
<<<<<<< HEAD

returns: an object with a welcome message and a token.

{
    "message": "Hi, test01. Have a token...",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJzdWJqZWN0IjozLCJpYXQiOjE1NzE2OTQxMDQsImV4cCI6MTU3MTc4MDUwNH0.RP-l6XKLcSybJK5sNdgUHF_cJtZf4oWe7_DhonRi428"
}

[GET] Users

URL: https://minimalist-homepage.herokuapp.com/users/:id

returns: an array of objects with user id, name, email.

[GET] quotes

URL: https://minimalist-homepage.herokuapp.com/quotes

returns an array of objects from a quotes API

[GET] Todo

URL: https://minimalist-homepage.herokuapp.com/todo

returns all items from a todo list schema based on user_id

[DELETE] Users by id

URL: https://minimalist-homepage.herokuapp.com/users/:id

returns an object that confirms the record was deleted (1 means true)

{
    "removed": 1
}

[PUT] Edit user by id

URL: https://minimalist-homepage.herokuapp.com/users/:id

returns a number confirming the record was edited
=======
returns: an object with a welcome message and a token.
{
    "message": "Hi, test01. Have a token...",
              "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJzdWJqZWN0IjozLCJpYXQiOjE1NzE2OTQxMDQsImV4cCI6MTU3MTc4MDUwNH0.RP-l6XKLcSybJK5sNdgUHF_cJtZf4oWe7_DhonRi428"
}          
```


### GET Users   | /users/:id           

| returns: an array of objects with user id, name, email.        |


### GET Quotes   | /quotes       

| returns an array of objects from a quotes API                                                                                                                           |


### GET todo    | /todo

|returns all items from a todo list schema based on user_id                                                                                 |


### DELETE Users by id | /users/:id      

| Removes the post with the specified id and returns the **deleted post object**.  |


### PUT  Edit users by id  |/users/:id        

| Updates the post with the specified `id` using data from the `request body`. Returns the modified document, **NOT the original**. 
Co
>>>>>>> 1eba03dc30526844f3c4654330240cdc6f7de9e3
