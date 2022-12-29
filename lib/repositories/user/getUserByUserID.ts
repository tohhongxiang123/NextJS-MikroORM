import { getEMFork } from '../../database/orm';
import { ENTITIES, User } from '../../entities';

export default async function getUserByUserID(
    userID: User['id']
): Promise<User | null> {
    const emFork = await getEMFork();
    return emFork.findOne<User>(ENTITIES.User, { id: userID });
}
