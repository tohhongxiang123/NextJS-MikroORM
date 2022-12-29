import { Migration } from '@mikro-orm/migrations';

export class Migration20221228150952 extends Migration {
    async up(): Promise<void> {
        this.addSql(
            'alter table "deck" drop constraint "deck_author_id_foreign";'
        );

        this.addSql(
            'alter table "deck" add column "name" varchar(255) not null, add column "created_by_id" varchar(255) not null;'
        );
        this.addSql(
            'alter table "deck" add constraint "deck_created_by_id_foreign" foreign key ("created_by_id") references "user" ("id") on update cascade;'
        );
        this.addSql('alter table "deck" drop column "title";');
        this.addSql('alter table "deck" drop column "author_id";');
    }

    async down(): Promise<void> {
        this.addSql(
            'alter table "deck" drop constraint "deck_created_by_id_foreign";'
        );

        this.addSql(
            'alter table "deck" add column "title" varchar(255) not null, add column "author_id" varchar(255) not null;'
        );
        this.addSql(
            'alter table "deck" add constraint "deck_author_id_foreign" foreign key ("author_id") references "user" ("id") on update cascade;'
        );
        this.addSql('alter table "deck" drop column "name";');
        this.addSql('alter table "deck" drop column "created_by_id";');
    }
}
