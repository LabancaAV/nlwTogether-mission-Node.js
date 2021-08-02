import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticaded(request: Request, response: Response, next: NextFunction){
    
    // receber o token
    const authtoken = request.headers.authorization;

    // validar se token está preenchido
    if(!authtoken){
        return response.status(401).end();
    }

    const [,token] = authtoken.split(" ");

    try {
        // validar se token é válido
        const { sub } = verify( token, "668685580583b0b9a11565ce6d59a570" ) as IPayLoad;

        request.user_id = sub;

        return next();

    } catch (error) {

        return response.status(401).end();
    
    }
    
    // recuperar informações do usuário
    

}
