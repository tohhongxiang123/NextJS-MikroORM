import { getEMFork } from '../../database/orm';
import { Deck, ENTITIES, User } from '../../entities';

export default async function getDecksByUserID(
    userID: User['id']
): Promise<Deck[]> {
    const emFork = await getEMFork();
    return emFork.find<Deck>(ENTITIES.Deck, { created_by: userID });
}
