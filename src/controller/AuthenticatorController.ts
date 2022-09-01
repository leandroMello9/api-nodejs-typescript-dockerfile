import { Request, Response } from "express";
import { UserSchema } from '../model/User'
import { User } from "../services/implements";
import AuthenticatorService from '../services/Authenticator'
class AuthenticatorController {
    async store(request: Request, response: Response): Promise<Response<void>> {
        try {
            const { password, email } = request.body;
            const authenticator = await AuthenticatorService.execute({
                email,
                password
            })

            return response.status(201).json({
                token: authenticator
            });
        } catch (err) {
            return response.status(401).json({ err: err });
        }

    }


}

export default new AuthenticatorController();