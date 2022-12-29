import { getEMFork } from '../../database/orm';
import { Deck, ENTITIES } from '../../entities';

export default async function getDeckByDeckID(
    deckID: Deck['id']
): Promise<Deck | null> {
    const emFork = await getEMFork();
    return await emFork.findOne<Deck>(ENTITIES.Deck, { id: deckID });
}
