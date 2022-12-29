import { getEMFork } from '../../database/orm';
import { ENTITIES, User } from '../../entities';

export default async function deleteUser(userID: User['id']) {
    const emFork = await getEMFork();
    const userToDelete = emFork.findOne<User>(ENTITIES.User, { id: userID });

    if (!userToDelete) return null;

    emFork.removeAndFlush(userToDelete);
    return userToDelete;
}
