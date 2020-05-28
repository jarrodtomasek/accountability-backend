// NPM
import express, { Router, Request, Response } from "express";

// Database
import UserManagement from '../database/user-management';

// Middlewares
import validateParams from '../middleware/validate-params';

// Other
import RequestRequirements from './request-requirements'
// import bcrypt from 'bcryptjs';  
// import rp from "request-promise";

const UserAuth: Router = express.Router();
const Requirements = new RequestRequirements();

UserAuth.post("/register", validateParams(Requirements.getRegisterParameters()), (req: Request, res: Response) => {
    try {
        let token = UserManagement.generateAuthToken();
        res.status(201).send({ "Message":"Hello World" });
    }
    catch(err) {

    }
})

UserAuth.get("/login", validateParams(Requirements.getLoginParameters()), (req: Request, res: Response) => {
    try {
        res.status(201).send({ "Message":"Hello World" });
    }
    catch(err) {
        res.status(400).send({ "Message": err});
    }
});

UserAuth.get("/logout", (req: Request, res: Response) => {
    try {
        res.status(201).send({ "Message":"Hello World" });
    }
    catch(err) {
        res.status(400).send({ "Message": err});
    }
});

export default UserAuth;