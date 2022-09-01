

interface User {
    username: string;
    password: string;
    email: string;
}

interface ICreateUser {
    execute: (user: User) => Promise<User | Error>
}

export {ICreateUser, User};