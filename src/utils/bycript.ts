import bcrypt from 'bcryptjs';

const salt = 8;

export default (password: string) => {
    try {
        const hashPassword = bcrypt.hashSync(password, salt)
        return hashPassword
    }catch(err) {
        throw new Error(`Error password hash ${err}`);
    }
}

