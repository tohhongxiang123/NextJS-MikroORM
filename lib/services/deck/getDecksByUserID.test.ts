import deckRepoMock from '../../repositories/deck/__mocks__/deckRepoMock';
import createGetDecksByUserID from './getDecksByUserID';

const getDecksByUserID = createGetDecksByUserID(deckRepoMock);

test('Returns deck with ID', async () => {
    const decks = await getDecksByUserID('1');
    expect(decks).not.toBeNull();

    decks.forEach(deck => expect(deck.created_by).toEqual('1'));
});

test('Returns null with non-existent deck ID', async () => {
    const deck = await getDecksByUserID('-9999');
    expect(deck).toHaveLength(0);
});
