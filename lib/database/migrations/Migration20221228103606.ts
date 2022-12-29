import { Migration } from '@mikro-orm/migrations';

export class Migration20221228103606 extends Migration {
    async up(): Promise<void> {
        this.addSql(
            'create table "deck" ("id" varchar(255) not null, "title" varchar(255) not null, "description" varchar(255) not null, "author_id" varchar(255) not null, constraint "deck_pkey" primary key ("id"));'
        );

        this.addSql(
            'alter table "deck" add constraint "deck_author_id_foreign" foreign key ("author_id") references "user" ("id") on update cascade;'
        );

        this.addSql(
            'alter table "user" alter column "name" type varchar(255) using ("name"::varchar(255));'
        );
        this.addSql('alter table "user" alter column "name" set not null;');
        this.addSql('alter table "user" alter column "email" drop default;');
        this.addSql(
            'alter table "user" alter column "email" type varchar(255) using ("email"::varchar(255));'
        );
        this.addSql('alter table "user" alter column "email" set not null;');
    }

    async down(): Promise<void> {
        this.addSql('drop table if exists "deck" cascade;');

        this.addSql(
            'alter table "user" alter column "name" type varchar(255) using ("name"::varchar(255));'
        );
        this.addSql('alter table "user" alter column "name" drop not null;');
        this.addSql(
            'alter table "user" alter column "email" type varchar(255) using ("email"::varchar(255));'
        );
        this.addSql(
            'alter table "user" alter column "email" set default \'\';'
        );
        this.addSql('alter table "user" alter column "email" drop not null;');
    }
}
