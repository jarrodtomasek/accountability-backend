// NPM
import express, { Router, Request, Response } from "express";

// Database
import UserManagement from '../database/user-management';

// Middlewares
import validateParams from '../middleware/validate-params';
import RequestRequirements from '../middleware/request-requirements'
// import bcrypt from 'bcryptjs';  
// import rp from "request-promise";


const UserAuth: Router = express.Router();
const Requirements = new RequestRequirements();

UserAuth.post("/register", validateParams(Requirements.getRegisterParameters()), async (req: Request, res: Response) => {
    try {
        UserManagement.registerUser()
        res.status(201).send({ "Message":"User Created" });
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