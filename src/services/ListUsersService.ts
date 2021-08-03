import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../retositories/UserRepositories";

class ListUserService {
    async execute(){
        const usersRepositories = getCustomRepository(UserRepositories);

        const users = await usersRepositories.find();

        return users;
    }
}

export { ListUserService };