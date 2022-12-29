import userRepoMock from '../../repositories/user/__mocks__/userRepoMock';
import createGetUserByUserID from './getUserByUserID';

const getUserByUserID = createGetUserByUserID(userRepoMock);

test('Gets user', async () => {
    const user = await getUserByUserID('1');
    expect(user).not.toBeNull();
    expect(user!.id).toEqual('1');
});

test('Returns null for non-existent user ID', async () => {
    const user = await getUserByUserID('-9999');
    expect(user).toBeNull();
});
