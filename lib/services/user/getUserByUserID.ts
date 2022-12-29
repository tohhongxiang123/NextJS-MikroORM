import { UserRepo } from '../../repositories';

export default function createGetUserByUserID(userRepo: UserRepo) {
    return userRepo.getUserByUserID;
}
