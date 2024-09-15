import { getRepository } from "typeorm"; 
import { Credentials } from "../../entities/credential"; 

export async function createCredentials(username: string, password: string): Promise<number> {
    const credentialsRepository = getRepository(Credentials);
    const newCredentials = new Credentials();
    newCredentials.username = username;
    newCredentials.password = password;
    const savedCredentials = await credentialsRepository.save(newCredentials);
    return savedCredentials.id;
}

export async function validateCredentials(username: string, password: string): Promise<number | null> {
    const credentialsRepository = getRepository(Credentials);
    const foundCredential = await credentialsRepository.findOne({ where: { username: username } });
    if (!foundCredential || foundCredential.password !== password) {
        return null;
    }
    return foundCredential.id;
}