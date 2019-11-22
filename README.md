## Endpoints

### baseURL: https://minimalist-homepage.herokuapp.com


### POST Registration  | /api/auth/register             |
Payload: an object with the following.
```
{
    "name": "test01",
    "email": "test01@gmail.com",
    "password": "password"
}
```
returns: an object with the user id, name, email, and password (encypted using bcrpyt to prevent hacking).                                                                                                       |
| 


### POST Login   | /api/auth/login |

Payload: an object with the following.
```
{
   "name": "test01",
    "password": "password"
}
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
