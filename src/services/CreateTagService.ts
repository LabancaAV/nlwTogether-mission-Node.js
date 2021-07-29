import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../retositories/TagRepositories";


class CreateTagService {

    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);
    
        if(!name){
            throw new Error("Incorrect name!");
        }

        // select * from tags where name = 'name'
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        if(tagAlreadyExists){
            throw new Error("Tag already exists");
        }

        const tag = tagsRepositories.create({
            name
        });

        await tagsRepositories.save(tag);

        return tag;

    }
}

export { CreateTagService }