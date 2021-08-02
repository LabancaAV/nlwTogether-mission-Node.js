import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../retositories/ComplimentRepositories";

class ListUserSendComplimentsService {

    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id
            }
        })

        return compliments;
    }
}

export { ListUserSendComplimentsService }