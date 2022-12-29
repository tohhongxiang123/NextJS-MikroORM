import { Migration } from '@mikro-orm/migrations';

export class Migration20221228151739 extends Migration {
    async up(): Promise<void> {
        this.addSql(
            'alter table "deck" alter column "id" type int using ("id"::int);'
        );
        this.addSql('create sequence if not exists "deck_id_seq";');
        this.addSql(
            'select setval(\'deck_id_seq\', (select max("id") from "deck"));'
        );
        this.addSql(
            'alter table "deck" alter column "id" set default nextval(\'deck_id_seq\');'
        );
    }

    async down(): Promise<void> {
        this.addSql(
            'alter table "deck" alter column "id" type varchar(255) using ("id"::varchar(255));'
        );
        this.addSql('alter table "deck" alter column "id" drop default;');
    }
}
