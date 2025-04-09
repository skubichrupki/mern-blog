/npm init -y
/npm install express mongoose dotenv
-- this will create dependencies in the package.json file
now on new pc run: npm install in root project dir

express - web framework
mongoose - interaction with mongo db
dotenv - access to .env environment variables

backend/server.js - entry point for apis
add "type": "module" to package.json - now server.js is read as module
add start: node server.js to run custom script to run server,js

to run backend server:
node .\backend\server.js