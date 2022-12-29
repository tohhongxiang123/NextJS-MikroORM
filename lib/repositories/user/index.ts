import { User } from '../../entities';
import createUser from './createUser';
import deleteUser from './deleteUser';
import getUserByUserID from './getUserByUserID';
import getUsers from './getUsers';

export interface UserRepo {
    getUserByUserID(userID: User['id']): Promise<User | null>;
    getUsers(): Promise<User[]>;
    createUser(user: User): Promise<User>;
    deleteUser(userID: User['id']): Promise<User | null>;
}

export function createUserRepo(): UserRepo {
    return {
        getUserByUserID,
        getUsers,
        createUser,
        deleteUser,
    };
}
