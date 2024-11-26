import { CreateUserLogic } from "../logics/createUser.logic";
import { Request, Response } from "express";

export class UserController {

    static async create(req: Request, res: Response) {
        const responseObj = {
            message: "Successfully created user",
            data: {},
            meta: {
                success: true
            }
        }
        try {
            console.log(req);
            const { name, email } = req.body;
            if(!name || !email) {
                throw { status: 400, message: "Please provide a name and email" };
            }
            const createUserLogic = new CreateUserLogic(name, email);
            await createUserLogic.execute();
            res.status(201).json(responseObj);
        } catch(e) {
            const status = e.status || 500;
            responseObj.message = e.message || "Internal server error";
            responseObj.meta.success = false;
            res.status(status).json(responseObj);
        }
    }
}