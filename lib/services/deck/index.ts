import { Deck, User } from '../../entities';
import { DeckRepo } from '../../repositories/deck';
import createCreateDeck from './createDeck';
import createGetDeckByDeckID from './getDeckByDeckID';
import createGetDecksByUserID from './getDecksByUserID';

export interface DeckService {
    getDeckByDeckID(deckID: Deck['id']): Promise<Deck | null>;
    getDecksByUserID(userID: User['id']): Promise<Deck[]>;
    createDeck(deck: Omit<Deck, 'id'>): Promise<Deck>;
}

export function createDeckService(deckRepo: DeckRepo): DeckService {
    return {
        getDeckByDeckID: createGetDeckByDeckID(deckRepo),
        getDecksByUserID: createGetDecksByUserID(deckRepo),
        createDeck: createCreateDeck(deckRepo),
    };
}
