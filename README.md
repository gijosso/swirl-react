# Swirl 2018 - Subject React
Author: Thomas Josso <thomas.josso@gmail.com>




# Subject

## Description
Your job is to implement a React/Redux client for the authenticated
API provided with at least 3 components.

Like the previous subject, I recommend deleting the 'front' folder if
you want to learn as much as possible (and if you are not struggling to much 🤗).

Why going for React after discovering Vue for the previous subject ?
Well the end goal of the two libraries are pretty much the same but:
- React has a vivid ecosystem, making it appropriate for a large amount of projects
(``redux``, ``thunk``, ``xstate`` to name a few) and especially with React Native
- I think it is important to see what are the pros and cons of the technologies
you are using
- adapt to the market (have a look at ``https://www.wappalyzer.com/`` 😉	)
- more importantly be able to choose a company/project for your internship !

## Usage
Use yarn preferably.




### Front-end ('front' folder)

#### Where to look
To summarize really quickly:
- ``store``: define your data
- ``actions``: signal a change of the store state (can be sent with data)
- ``reducers``: actually change the store data from the action sent
- ``components``: contain component with their own styles and own lifecycle
- ``containers``: decorate components with store interactivity

Having logic inside the ``actions`` files is just my take on things 😋.

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

GET     .../keep-alive    //Refreshes the expiracy date of the token, server-side

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

### Important Note ⚠😱
- The back-end, which is not the real point of the subject, has been done quickly.
- JWT should be the way to go.
- Express sessionS should be used rather than manual ones.
- The back-end integrity is not guaranteed (no user field check).
- Message sent need to be non-explicit.
- The JSON file based 'database', made for rookies to avoid setup and connection to real databases engines,
may cause some unexpected behaviors, especially on concurrent accesses.
- GraphQL could be a great way to avoid the wanky JSON files.
