import {
    Cascade,
    Collection,
    Entity,
    OneToMany,
    PrimaryKey,
    Property,
    Unique,
} from '@mikro-orm/core';
import { defaultEntities } from '@next-auth/mikro-orm-adapter';
import { Account, Session } from '@next-auth/mikro-orm-adapter/dist/entities';
import { randomUUID } from 'crypto';

const { Account: MikroOrmAccount, Session: MikroOrmSession } = defaultEntities;

@Entity()
export class User implements defaultEntities.User {
    @PrimaryKey()
    id: string = randomUUID();

    @Property()
    name!: string;

    @Property()
    @Unique()
    email!: string;

    @Property({ type: 'Date', nullable: true })
    emailVerified: Date | null = null;

    @Property({ nullable: true })
    image?: string;

    @OneToMany({
        entity: () => MikroOrmSession,
        mappedBy: session => session.user,
        hidden: true,
        orphanRemoval: true,
        cascade: [Cascade.ALL],
    })
    sessions = new Collection<Session>(this);

    @OneToMany({
        entity: () => MikroOrmAccount,
        mappedBy: account => account.user,
        hidden: true,
        orphanRemoval: true,
        cascade: [Cascade.ALL],
    })
    accounts = new Collection<Account>(this);
}
