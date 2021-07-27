import { UserRepositories } from "../retositories/UserRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest){
        const userRepository = new UserRepositories();

        if(!email){
            throw new Error("Email incorrect.");
        }

        const userAlreadyExists = await userRepository.findOne({ 
            email,
         });

         if(userAlreadyExists){
             throw new Error("User already exists.");
         }

         const user = userRepository.create({
             name,
             email,
             admin
         })

         await userRepository.save(user);

         return user;

    }
}

export { CreateUserService }