import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../retositories/ComplimentRepositories";

class ListUserReceiveComplimentsService {

    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments;
    }
}

export { ListUserReceiveComplimentsService }