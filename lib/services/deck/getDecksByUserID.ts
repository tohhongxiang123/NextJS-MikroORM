import { User } from '../../entities';
import { DeckRepo } from '../../repositories';

export default function createGetDecksByUserID(deckRepo: DeckRepo) {
    return async function getDecksByUserID(userID: User['id']) {
        return deckRepo.getDecksByUserID(userID);
    };
}
