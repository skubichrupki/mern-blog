npm init -y
npm install express mongoose dotenv
npm i nodemon -D (dev dependency)
-- this will create dependencies and devDependencies in the package.json file
now on new pc run: npm install in root project dir

express - web framework
mongoose - interaction with mongo db
dotenv - access to .env environment variables

backend/server.js - entry point for apis
add "type": "module" to package.json - now server.js is read as module
add start: node server.js to run custom script to run server,js

to run backend server:
node .\backend\server.js


MongoDB
https://cloud.mongodb.com/
create new project
create a cluster - server instance
Free - 512mb storage
Cluster0
username mskupinski2404
connection string and password in .env file. create it locally

collections vs tables
in each collection we have documents
collections:
- posts
- users
collection: posts
    - post 1 doc
    - post 2 doc
collection: users
    - user 1 doc
    - user 2 doc

for that we create a model using mongoose package that interacts with mongo db
models
models have schemas

sample post /api/posts payload:
{
    "title": "test title",
    "description": "test description"
}

NEED TO DOWNLAOD POSTMAN DESKTOP AGENT TO TEST API LOCALLY
https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
moongose documentation