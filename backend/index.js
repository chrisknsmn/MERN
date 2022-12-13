import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes/routes.js';

const app = express();
const PORT = 4000;

//Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern', {

});

//bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//cors setup
app.use(cors());

routes(app);

app.get('/', (req, res) => 
    res.send(`Hello World! running at ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Hello World! running at ${PORT}`)
);
