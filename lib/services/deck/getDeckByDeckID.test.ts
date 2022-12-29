import createGetDeckByDeckID from './getDeckByDeckID';
import deckRepoMock from '../../repositories/deck/__mocks__/deckRepoMock';

const getDeckByDeckID = createGetDeckByDeckID(deckRepoMock);

test('Returns deck with ID', async () => {
    const deck = await getDeckByDeckID(1);
    expect(deck).not.toBeNull();
    expect(deck!.id).toEqual(1);
});

test('Returns null with non-existent deck ID', async () => {
    const deck = await getDeckByDeckID(-9999);
    expect(deck).toBeNull();
});
