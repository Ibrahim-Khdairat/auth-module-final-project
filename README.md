# Auth-Module-Final-Project

## Contributors

- **Ibrahim Khdairat**
- **Suhaib Ersan**
- **Ghaida'a Al-Nattah**

## Links

- [Back-End Link.](https://auth-project-401.herokuapp.com/)
- [Repo Link.](https://github.com/Ibrahim-Khdairat/auth-module-final-project)

## Setup

`.env` **requirements**

- `PORT` - Port Number

- `SQL_DATABASE_URL` = Postgres DB

- `SECRET` = JWT SECRET

## Running the app

- `npm start`

  <br/>



## Users Endpoints

### **EndPoint &nbsp;&nbsp; ➜ &nbsp;&nbsp; `/signup`**

**Example**

- Send:

  > `{"userName": "ibrahim-kh", "password": "pass123" , "role":"student"}`

- After adding a new user to the database, the server sends the info of that user, returns Object:

    ```
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
    ```


    <br/>
    <br/>
    

### **EndPoint &nbsp;&nbsp; ➜ &nbsp;&nbsp; `/signin`**

**Example**

- Send:
  > - userName `Ghaidaa`
  > - password `AlNattah`

<br/>

- After authenticating a user, server returns Object:

    ```
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
    ```

    <br/>
    <br/>


### **EndPoint &nbsp;&nbsp; ➜ &nbsp;&nbsp; `/users`**

**Example**
#### With an account that has the role of a "user" or "instructor"
- Send:

    > - Token for a student (ibrahim-kh) `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImlicmFoaW0ta2giLCJpYXQiOjE2Mjk5MjEwMTZ9.M8GS_Fp9Zo0sMLwf9ttEMgjiNxA_N23TitFhvpgrGU4`

    <br/>

- After checking the authorization of the account that's doing the request, the server returns a list of all users, returns Object:

    ```
    {
        "status": 500,
        "message": "Access Denied"
    }
    ```

    
    <br/>
    <br/>
    
    #### With an account that has the role of an "admin"
- Send:
    > - Token for an admin (Ghaida'a) `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkdoYWlkYWEiLCJpYXQiOjE2Mjk5MjExMzB9.p3BfCShq9CefSYAhL0-GhyxhcrbhOiWWwXxNTdCld8U`

    <br/>

- After checking the authorization of the account that's doing the request, the server returns a list of all users, returns Array:
    ```
    [
        "Suhaib",
        "Ghaidaa",
        "Ibrahim",
        "Hema",
        "Ibrahim Swaiss",
        "ibrahim-kh"
    ]
    ```

    <br/>
    <br/>
    


## Courses Endpoints

### **EndPoint &nbsp;&nbsp; ➜ &nbsp;&nbsp; `/allCourses`**

**Example**
#### With an account that has the role of a "user" or above

- Send:

  > - Token for an admin (Ghaida'a) `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkdoYWlkYWEiLCJpYXQiOjE2Mjk5MjExMzB9.p3BfCShq9CefSYAhL0-GhyxhcrbhOiWWwXxNTdCld8U`

- After checking the authorization of the account that's doing the request, the server returns a list of all courses, returns object:

    ```
    {
        "courses": [
            {
                "id": 4,
                "courseName": "Design",
                "courseMajor": "Graphic",
                "courseDescription": "Intermediate",
                "courseHours": 5,
                "createdAt": "2021-08-25T18:23:11.310Z",
                "updatedAt": "2021-08-25T18:44:14.684Z"
            },
            {
                "id": 5,
                "courseName": "NameHere",
                "courseMajor": "MajoreHere",
                "courseDescription": "DescHere",
                "courseHours": 5,
                "createdAt": "2021-08-25T19:28:22.274Z",
                "updatedAt": "2021-08-25T19:28:22.274Z"
            }
        ]
    }
    ```


    <br/>
    <br/>
    

### **EndPoint &nbsp;&nbsp; ➜ &nbsp;&nbsp; `/addcourse`**

**Example**
#### With an account that has the role of a "user"

- Send:

  > - Token for a student (ibrahim-kh) `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImlicmFoaW0ta2giLCJpYXQiOjE2Mjk5MjEwMTZ9.M8GS_Fp9Zo0sMLwf9ttEMgjiNxA_N23TitFhvpgrGU4`

- After checking the authorization of the account that's doing the request, the server returns an "access denied" error, returns object:

    ```
    {
        "status": 500,
        "message": "Access Denied"
    }
    ```


    <br/>
    <br/>
    
#### With an account that has the role of a "instructor" or above

- Send:

  > - Token for an admin (Ghaida'a) `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkdoYWlkYWEiLCJpYXQiOjE2Mjk5MjExMzB9.p3BfCShq9CefSYAhL0-GhyxhcrbhOiWWwXxNTdCld8U`

- After checking the authorization of the account that's doing the request, the server adds a new course and then returns the new course info, returns object:

    ```
    {
        "course": {
            "id": 6,
            "courseName": "NameHere",
            "courseMajor": "MajoreHere",
            "courseDescription": "DescHere",
            "courseHours": 5,
            "updatedAt": "2021-08-25T20:33:19.611Z",
            "createdAt": "2021-08-25T20:33:19.611Z"
        }
    }
    ```


    <br/>
    <br/>
    
### **EndPoint &nbsp;&nbsp; ➜ &nbsp;&nbsp; `/deleteCourse`**

**Example**
#### With an account that has the role of a "user" or "instructor"

- Send:

  > - Token for a student (ibrahim-kh) `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImlicmFoaW0ta2giLCJpYXQiOjE2Mjk5MjEwMTZ9.M8GS_Fp9Zo0sMLwf9ttEMgjiNxA_N23TitFhvpgrGU4`

  <br/>

- After checking the authorization of the account that's doing the request, the server returns an "access denied" error, returns object:

    ```
    {
        "status": 500,
        "message": "Access Denied"
    }
    ```

    <br/>
    
#### With an account that has the role of an "admin"

- Send:

  > - Token for an admin (Ghaida'a) `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkdoYWlkYWEiLCJpYXQiOjE2Mjk5MjExMzB9.p3BfCShq9CefSYAhL0-GhyxhcrbhOiWWwXxNTdCld8U`

  <br/>

- After checking the authorization of the account that's doing the request, and then deleting the specified course, it returns the rest of the courses, returns Object:

    ```
    {
        "courses": [
            {
                "id": 5,
                "courseName": "NameHere",
                "courseMajor": "MajoreHere",
                "courseDescription": "DescHere",
                "courseHours": 5,
                "createdAt": "2021-08-25T19:28:22.274Z",
                "updatedAt": "2021-08-25T19:28:22.274Z"
            }
        ]
    }
    ```


    <br/>
    <br/>

## Stretch Goals:

### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`
