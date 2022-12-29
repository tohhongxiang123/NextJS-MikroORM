import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';

@Entity()
export class Deck {
    @PrimaryKey({ autoincrement: true })
    id?: number;

    @Property()
    name!: string;

    @Property()
    description!: string;

    @ManyToOne({ type: User })
    created_by!: User['id'];
}
