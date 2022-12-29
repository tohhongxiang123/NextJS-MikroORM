import { Deck } from '../../entities';
import { DeckRepo } from '../../repositories';

export default function createCreateDeck(deckRepo: DeckRepo) {
    return function createDeck(deck: Omit<Deck, 'id'>) {
        return deckRepo.createDeck(deck);
    };
}
