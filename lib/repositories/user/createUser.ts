import { getEMFork } from '../../database/orm';
import { ENTITIES, User } from '../../entities';

export default async function createUser(user: User) {
    const emFork = await getEMFork();

    const createdUser = emFork.create<User>(ENTITIES.User, user);
    emFork.persistAndFlush(createdUser);
    return createdUser;
}
