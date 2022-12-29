import { Deck, User } from '../../entities';
import createDeck from './createDeck';
import getDeckByDeckID from './getDeckByDeckID';
import getDecks from './getDecks';
import getDecksByUserID from './getDecksByUserID';

export interface DeckRepo {
    createDeck(deck: Omit<Deck, 'id'>): Promise<Deck>;
    getDeckByDeckID(deckID: Deck['id']): Promise<Deck | null>;
    getDecksByUserID(userID: User['id']): Promise<Deck[]>;
    getDecks(): Promise<Deck[]>;
}

export function createDeckRepo(): DeckRepo {
    return {
        getDeckByDeckID,
        getDecksByUserID,
        getDecks,
        createDeck,
    };
}
