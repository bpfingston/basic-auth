# basic-auth  
Created by Bryce Pfingston  

## Installation  
npm i { jest, express, dotenv, supertest, pg, sequelize, sqlite3, seqluelize-cli, bcrypt, base64 }  
  
## Summary of Problem Domain  
Deploy an Express server that implements Basic Authentication, with signup and signin capabilities, using a Postgres database for storage.  


## Links to application deployment  
 
Heroku: https://basic-auth-bryce.herokuapp.com/  
Githut: https://github.com/bpfingston/basic-auth  
  
## Include embedded UML
![embedded UML](./images/devpath.png)

## Talk about your routes

sign-in:
    - SignIn:
        - validate user
        - HTTP POST
    -SignUp:
        - Create a new Username and Password
        - HTTP POST
