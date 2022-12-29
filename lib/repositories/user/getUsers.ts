import { getEMFork } from '../../database/orm';
import { ENTITIES, User } from '../../entities';

export default async function getUsers() {
    const emFork = await getEMFork();
    return emFork.find<User>(ENTITIES.User, {});
}
