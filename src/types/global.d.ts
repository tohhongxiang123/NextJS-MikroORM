import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';

declare global {
    // eslint-disable-next-line
    var __MikroORM__: MikroORM<IDatabaseDriver<Connection>>;
}
