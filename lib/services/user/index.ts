import { User } from '../../entities';
import { UserRepo } from '../../repositories/user';
import createDeleteUser from './deleteUser';
import createGetUserByUserID from './getUserByUserID';
import createGetUsers from './getUsers';

export interface UserService {
    getUserByUserID(userID: User['id']): Promise<User | null>;
    getUsers(): Promise<User[]>;
    deleteUser(userID: User['id']): Promise<User | null>;
}

export function createUserService(userRepo: UserRepo): UserService {
    return {
        getUserByUserID: createGetUserByUserID(userRepo),
        getUsers: createGetUsers(userRepo),
        deleteUser: createDeleteUser(userRepo),
    };
}
