# Swirl 2018 - Subject React
Authors: josso_t




# Subject

## Description

## Usage
Use yarn preferably.




### Front-end ('front' folder)

#### Where to look




### Back-end ('back' folder)
```
yarn install
```

Start the back end independently:
```
yarn start
```

Routes
```
POST    .../authenticate  //Takes "login" and "password" as body parameters, and set a cookie with the session token on sucessful authentication

GET     .../refresh       //Refreshes the expiracy date of the token, server-side

GET     .../user          //Authenticated: returns all users
POST    .../user          //Authenticated: takes "login" and "password" as body parameter, creates an user
GET     .../user/userId   //Authenticated: returns infos of user with id "userId"
DELETE  .../user/userId   //Authenticated: deletes user with id "userId"
```

The JSON response is as follow
```
data                        //Contains the relevant data, null if error
message                     //Explicit method used
error                       //Error message, null if none
```

#### Where to look

- ./api/routes/*.js: routes for models and features
- ./api/controllers/*.js: logic for the routes
- ./server.js: server entry point and header configuration

### Important Note
The back-end, which is not the real point of the subject, has been done quickly.
The back-end integrity is not guaranteed (no user field check).
Message sent need to be non-explicit.
The JSON file based 'database', made for rookies to avoid setup and connection to real databases engines,
may cause some unexpected behaviours, especially on concurrent accesses.
The code needs a serious refactor too.