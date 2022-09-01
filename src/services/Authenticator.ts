import { UserSchema } from '../model/User';
import bycript from 'bcryptjs';
import { IAuthenticator, UserAuthenticator } from './implements'
import jwt from 'jsonwebtoken';

class AuthenticatorService implements IAuthenticator {
    async execute({ email,password }: UserAuthenticator): Promise<any> {
        //CreateService
        const secret = "eashea";
        const user = await UserSchema.findOne({
            email
        })
        if(!user) {
            throw {
                msg: 'User isnt exist',
                status: 404
            }
        }
        
        const isValidPassword = await bycript.compare(password, user.password);
        if(!isValidPassword) {
            throw {
                msg: 'Password isnt math',
                status: 404
            }
        }
        
        const generatedToken = jwt.sign({}, secret, {expiresIn: '1d'})
        delete user.password;
        return generatedToken;

    }

}

export default new AuthenticatorService();