## db ##

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

create username and password in mongo db database access
MONGO_URI=mongodb+srv://username:password@cluster0.k8mcgx3.mongodb.net/posts?retryWrites=true&w=majority&appName=Cluster0


## backend ##

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

On production for example on Render/Heroku
it creates it own .env file
you set MONGO_URI, JWT_SECRET etc
but they set the port
so const port = process.env.PORT || 5000; use their own port and 5000 if its not defined, like on development

## frontend ##

frontend will be created using react + vite
cd frontend
npm create vite@latest .
npm install

then to chakra UI 57:40
npm install @mantine/core @mantine/hooks @mantine/form @mantine/tiptap @tiptap/pm @tiptap/react @tiptap/extension-link @tiptap/starter-kit @mantine/dropzone @mantine/nprogress
npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars
