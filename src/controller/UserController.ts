import { Request, Response } from "express";
import { UserSchema } from '../model/User'
import { User } from "../services/implements";

class UserController {
    async store(request: Request, response: Response): Promise<Response<User | Error>> {
        try {
            const { username, password, email } = request.body;
            const newUser = await UserSchema.create({
                username,
                password,
                email
            })
            return response.status(201).json(newUser);
        } catch (err) {
            return response.status(400).json(err);
        }

    }


}

export default new UserController();