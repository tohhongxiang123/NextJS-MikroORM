import { getEMFork } from '../../database/orm';
import { Deck, ENTITIES } from '../../entities';

export default async function getDecks() {
    const emFork = await getEMFork();
    return emFork.find<Deck>(ENTITIES.Deck, {});
}
