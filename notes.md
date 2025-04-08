/npm init -y
/npm install express mongoose dotenv
-- this will create dependencies in the package.json file

express - web framework
mongoose - interaction with mongo db
dotenv - access to .env environment variables

backend/server.js - entry point for apis
add "type": "module" to package.json - now server.js is read as module

to run backend server:
node .\backend\server.js