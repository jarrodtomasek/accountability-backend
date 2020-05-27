import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

// body parser extracts the request body & exposes it on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello")
});


app.listen(5000, () => {
    console.log("Server Running")
})