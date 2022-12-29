import { getEMFork } from '../database/orm';
import { Deck } from '../entities';

export default async function getDeckByDeckID(deckID: Deck['id']) {
    const emFork = await getEMFork();
    return emFork.findOne('Deck', { id: deckID });
}
