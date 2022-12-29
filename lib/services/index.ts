import { createDeckRepo, createUserRepo } from '../repositories';
import { createDeckService } from './deck';
import { createUserService } from './user';

const deckRepo = createDeckRepo();
const deckService = createDeckService(deckRepo);

const userRepo = createUserRepo();
const userService = createUserService(userRepo);

export { deckService, userService };
