# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## backend
### `MongoDB`
The backend uses Node.js and Express to connect to a MongoDb database. 

Start MongoDB on a mac using homebrew with the following command:
```
brew services start mongodb-community@6.0
```

### `npm install`
Move to the backend folder.
Start by installing necessary packages by running:
```
npm install
```

### `npm start`
In backend folder connect to the database using the backend node app with the following command:
```
npm start
```

The backend app will be running a [http://localhost:4000/](http://localhost:4000/) in the browser.
The page should display:
> Hello World! running at 4000

## frontend
### `npm install`
Move to the frontend folder and run the following command to install the necessary dependencies:
```
npm install
```


### `npm start`
Start the frontend Node app with the following command. 
```
npm start
```
This will begin to run the frontend app at [http://localhost:3000/](http://localhost:3000/)

With both frontend and backend apps running you will be able to connect to read and write to the database from the browser. Use the select dropdown to view a list of all users or select the '+' button to the right to input a new name. 


