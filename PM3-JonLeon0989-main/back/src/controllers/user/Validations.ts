import { getRepository } from "typeorm";
import { Users } from "../../entities/User"; 
import { Credentials } from "../../entities/credential"; 

export async function validateCredentialsAndGetUser(username: string, password: string): Promise<Users | null> {
    const credentialsRepository = getRepository(Credentials);
    const foundCredential = await credentialsRepository.findOne({ where: { username: username } });
    if (!foundCredential || foundCredential.password !== password) {
        return null;
    }

    const usersRepository = getRepository(Users);
    const user = await usersRepository.findOne({ where: { credentials: foundCredential }, relations: ["appointments"] });
    return user;
}