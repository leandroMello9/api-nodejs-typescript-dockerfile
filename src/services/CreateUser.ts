import { ICreateUser, User } from './implements'

class CreateUserService implements ICreateUser {
    async execute({ email,password,username }: User): Promise<any> {
        //CreateService
        
    }

}