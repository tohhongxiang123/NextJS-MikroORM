import { Deck } from '../../entities';
import { DeckRepo } from '../../repositories';

export default function createGetDeckByDeckID(deckRepo: DeckRepo) {
    return async function getDeckByDeckID(deckID: Deck['id']) {
        return deckRepo.getDeckByDeckID(deckID);
    };
}
