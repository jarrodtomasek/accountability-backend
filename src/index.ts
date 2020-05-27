import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

// Database
import { DBConnection } from './database/connect'

// Routes
import UserAuth from './routes/UserAuth'

const app: Application = express();

// body parser extracts the request body & exposes it on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Create Connection to Database
const mySQLConnection = new DBConnection();
mySQLConnection.connect();
mySQLConnection.createUserTable();
// mySQLConnection.createTaskTable();
// mySQLConnection.createGroupTable();

app.listen((process.env.PORT || 5000), () => {
    console.log("Server Running");
});

// Default Endpoint 
app.get("/", (req: Request, res: Response) => {
    res.send("Hello")
});

// Redirect User Auth endpoints
app.use("/api/v1/userAuth", UserAuth);