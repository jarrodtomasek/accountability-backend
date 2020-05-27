import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

// Database
import { DBConnection } from './database/connect'

const app: Application = express();

// body parser extracts the request body & exposes it on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Create Connection to Database
const dbConnection = new DBConnection().connect();

app.listen((process.env.PORT || 5000), () => {
    console.log("Server Running")
});

// Default Endpoint 
app.get("/", (req: Request, res: Response) => {
    res.send("Hello")
});