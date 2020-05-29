import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

// Database
import { DBConnection } from './database/connect'

// Routes
import UserAuth from './routes/UserAuth'

const app: Application = express();
const CLIENT_PORT = 8100;

// body parser extracts the request body & exposes it on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req: Request, res: Response, next: NextFunction) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + CLIENT_PORT);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

// pre-flight requests
app.options('*', (req: Request, res: Response) => {
  res.send(200)
})

// Create Connection to Database
const mySQLConnection = new DBConnection();
mySQLConnection.connect();

app.listen((process.env.PORT || 5000), () => {
    console.log("Server Running");
});

// Default Endpoint 
app.get("/", (req: Request, res: Response) => {
    res.send("Hello")
});

// Redirect User Auth endpoints
app.use("/api/v1/userAuth", UserAuth);