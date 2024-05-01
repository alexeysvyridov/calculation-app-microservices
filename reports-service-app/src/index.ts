import express  from 'express';
import dotenv from 'dotenv';
// import postgresql from './db/postgresql.js';
import carsRoute from './routes/carsRoute.js';
import addNewCarRouter from './routes/addNewCar.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'; 
import {pool} from './db/postgresql.js';

const app = express();
dotenv.config();


const port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/api/v2', carsRoute)
app.use('/api/v2', addNewCarRouter)

app.listen(port, () => {
  console.log('Server in running on port: ', port);
})