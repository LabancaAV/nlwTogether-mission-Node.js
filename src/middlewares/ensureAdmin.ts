import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../retositories/UserRepositories";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction){

    const { user_id } = request;
    console.log(user_id);


    const usersRepositories = getCustomRepository(UserRepositories);

    const { admin } = await usersRepositories.findOne(user_id);

    // verificar se usuário admin
    
    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized."
    })

}