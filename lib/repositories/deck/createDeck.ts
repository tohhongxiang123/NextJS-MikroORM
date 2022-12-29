import { getEMFork } from '../../database/orm';
import { Deck } from '../../entities';

export default async function createDeck(deck: Omit<Deck, 'id'>) {
    const emFork = await getEMFork();
    const response = emFork.create<Deck>('Deck', deck);

    emFork.persistAndFlush(response);
    return response;
}
