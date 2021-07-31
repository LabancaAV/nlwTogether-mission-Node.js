import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UserRepositories } from "../retositories/UserRepositories"


interface IAuthenticateService {
    email: string,
    password: string
}

class AuthenticateUserService{
    async execute({ email, password }: IAuthenticateService){
        const usersRepositories = getCustomRepository(UserRepositories);
        
        //verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect");
        }

        // verificar se senha está correta

        // 12345 / 87623746347-fjkhdk32647
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        // Gerar token
        const token = sign(
            {
                email: user.email
            }, 
            "668685580583b0b9a11565ce6d59a570", 
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );

        return token;
    }
}

export { AuthenticateUserService }