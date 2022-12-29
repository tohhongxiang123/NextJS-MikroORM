import { Collection } from '@mikro-orm/core';
import { Account, Session } from '@next-auth/mikro-orm-adapter/dist/entities';
import { User } from '../../../entities';

const users: User[] = [
    {
        id: '0',
        name: 'Toh Hong Xiang',
        email: 'tohhongxiang@gmail.com',
        emailVerified: null,
        sessions: new Collection<Session>({}),
        accounts: new Collection<Account>({}),
    },
    {
        id: '1',
        name: 'Lorem ipsum dolor sit amet',
        email: 'asdfasdf@gmail.com',
        emailVerified: null,
        sessions: new Collection<Session>({}),
        accounts: new Collection<Account>({}),
    },
    {
        id: '2',
        name: 'Donec mollis dignissim lacinia',
        email: 'zxcv@gmail.com',
        emailVerified: null,
        sessions: new Collection<Session>({}),
        accounts: new Collection<Account>({}),
    },
    {
        id: '3',
        name: 'Cras nec',
        email: 'varius@gmail.com',
        emailVerified: null,
        sessions: new Collection<Session>({}),
        accounts: new Collection<Account>({}),
    },
    {
        id: '4',
        name: 'Aliquam erat volutpat',
        email: 'ipsum@gmail.com',
        emailVerified: null,
        sessions: new Collection<Session>({}),
        accounts: new Collection<Account>({}),
    },
    {
        id: '5',
        name: 'Mauris congue ante a',
        email: 'pulvinar@gmail.com',
        emailVerified: null,
        sessions: new Collection<Session>({}),
        accounts: new Collection<Account>({}),
    },
];

export default users;
