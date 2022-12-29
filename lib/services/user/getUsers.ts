import { UserRepo } from '../../repositories';

export default function createGetUsers(userRepo: UserRepo) {
    return userRepo.getUsers;
}
