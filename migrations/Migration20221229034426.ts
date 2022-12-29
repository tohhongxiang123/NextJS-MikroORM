import { Migration } from '@mikro-orm/migrations';

export class Migration20221229034426 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "deck" ("id" serial primary key, "name" varchar(255) not null, "description" varchar(255) not null, "created_by_id" varchar(255) not null);');

    this.addSql('alter table "deck" add constraint "deck_created_by_id_foreign" foreign key ("created_by_id") references "user" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "deck" cascade;');
  }

}
