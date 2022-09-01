

interface UserAuthenticator {
    password: string;
    email: string;
}

interface IAuthenticator {
    execute: ({email, password}: UserAuthenticator) => Promise<string | Error>
}

export {IAuthenticator, UserAuthenticator};