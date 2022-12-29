import { User } from '../../entities';
import { UserRepo } from '../../repositories';

export default function createDeleteUser(userRepo: UserRepo) {
    return function deleteUser(userID: User['id']) {
        return userRepo.deleteUser(userID);
    };
}
