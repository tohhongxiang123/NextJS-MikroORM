import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { defaultEntities } from '@next-auth/mikro-orm-adapter';
import { Deck, User } from '../../entities';

const { Session, Account, VerificationToken } = defaultEntities;
const config: Options = {
    driver: PostgreSqlDriver,
    clientUrl: process.env.DATABASE_URL,
    entities: [Deck, User, Session, Account, VerificationToken],
    discovery: { disableDynamicFileAccess: false },
    debug: process.env.NODE_ENV === 'development',
    migrations: {
        path: './migrations',
    },
};

export default config;
