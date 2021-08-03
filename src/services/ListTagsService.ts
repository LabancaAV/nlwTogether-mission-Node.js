import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../retositories/TagRepositories"


class ListTagsService {
    async execute(){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();

        return tags;
    }

}

export { ListTagsService }