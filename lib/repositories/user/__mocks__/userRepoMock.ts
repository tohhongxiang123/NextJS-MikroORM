import { UserRepo } from '../..';
import { User } from '../../../entities';
import users from './users';

const userRepoMock: UserRepo = {
    getUserByUserID: jest.fn(userID =>
        Promise.resolve(users.find(user => user.id === userID) ?? null)
    ),
    getUsers: jest.fn(() => Promise.resolve(users)),
    createUser: jest.fn((user: User) => {
        users.push(user);
        return Promise.resolve(user);
    }),
    deleteUser: jest.fn((userID: User['id']) => {
        const toDelete = users.find(user => user.id === userID);
        if (!toDelete) {
            return Promise.resolve(null);
        }

        // for the delete mock, we dont have to actually delete
        return Promise.resolve(toDelete);
    }),
};

export default userRepoMock;
