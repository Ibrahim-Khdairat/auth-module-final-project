# Auth-Module-Final-Project



* 1- **Ibrahim Khdairat**
* 2- **Suhaib Ersan**
* 3- **Ghaida'a Al-Nattah**

### Deployment Test


- [Back-End](https://auth-project-401.herokuapp.com/).
- [Repo Link](https://github.com/Ibrahim-Khdairat/auth-module-final-project).

**Setup**

`.env` **requirements**

- `PORT` - Port Number

- `SQL_DATABASE_URL` = Postgres DB

- `SECRET` = JWT SECRET

**Running the app**

- `npm start`

- Endpoint: `/signup`

> `{"userName": "ibrahim-kh", "password": "pass123" , "role":"student"}`

- Returns Object

    {
    "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImlicmFoaW0ta2giLCJpYXQiOjE2Mjk5MjEwMTZ9.M8GS_Fp9Zo0sMLwf9ttEMgjiNxA_N23TitFhvpgrGU4",
        "capabilities": [
            "read"
        ],
        "id": 7,
        "userName": "ibrahim-kh",
        "password": "$2b$10$D/6Lxk151Bf3P/kzOFx3QewInk3IiftGqbyuMIM2ZePfe9LUeCC6G",
        "role": "student",
        "updatedAt": "2021-08-25T19:50:16.883Z",
        "createdAt": "2021-08-25T19:50:16.883Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImlicmFoaW0ta2giLCJpYXQiOjE2Mjk5MjEwMTZ9.M8GS_Fp9Zo0sMLwf9ttEMgjiNxA_N23TitFhvpgrGU4"
}


- Endpoint: `/signin`

> - userName `Ghaidaa`
> - password `AlNattah`

- Returns Object

 {
    "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkdoYWlkYWEiLCJpYXQiOjE2Mjk5MjExMzB9.p3BfCShq9CefSYAhL0-GhyxhcrbhOiWWwXxNTdCld8U",
        "capabilities": [
            "read",
            "create",
            "update",
            "delete"
        ],
        "id": 2,
        "userName": "Ghaidaa",
        "password": "$2b$10$jbO4i6eYP5NtqtzzaaZbzuVrM8CUhKQ4svj5rkgmaS65eUM.b0wPe",
        "role": "admin",
        "createdAt": "2021-08-25T09:40:12.465Z",
        "updatedAt": "2021-08-25T09:40:12.465Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkdoYWlkYWEiLCJpYXQiOjE2Mjk5MjExMzB9.p3BfCShq9CefSYAhL0-GhyxhcrbhOiWWwXxNTdCld8U"
}
- Endpoint: `/users`

> - Token for an admin (Ghaida'a) `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkdoYWlkYWEiLCJpYXQiOjE2Mjk5MjExMzB9.p3BfCShq9CefSYAhL0-GhyxhcrbhOiWWwXxNTdCld8U`

- Returns Array
[
    "Suhaib",
    "Ghaidaa",
    "Ibrahim",
    "Hema",
    "Ibrahim Swaiss",
    "ibrahim-kh"
]

> - Token for an student (ibrahim-kh) `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImlicmFoaW0ta2giLCJpYXQiOjE2Mjk5MjEwMTZ9.M8GS_Fp9Zo0sMLwf9ttEMgjiNxA_N23TitFhvpgrGU4`

-Returns Object
 
{
    "status": 500,
    "message": "Access Denied"
}









**Tests**

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`