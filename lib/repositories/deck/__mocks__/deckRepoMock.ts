import { DeckRepo } from '../..';
import { Deck, User } from '../../../entities';
import decks from './decks';

const deckRepoMock: DeckRepo = {
    getDeckByDeckID: jest.fn((deckID: Deck['id']) =>
        Promise.resolve(decks.find(deck => deck.id === deckID) ?? null)
    ),
    getDecksByUserID: jest.fn((userID: User['id']) =>
        Promise.resolve(decks.filter(deck => deck.created_by === userID))
    ),
    getDecks: jest.fn(() => Promise.resolve(decks)),
    createDeck: jest.fn((deck: Deck) => {
        decks.push(deck);
        return Promise.resolve(deck);
    }),
};

export default deckRepoMock;
