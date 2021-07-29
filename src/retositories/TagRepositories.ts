import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

class TagsRepositories extends Repository<Tag> {}

export { TagsRepositories };