import { MikroORM } from '@mikro-orm/core';
import config from './config/mikro-orm';

export async function getORM() {
    if (!global.__MikroORM__) {
        global.__MikroORM__ = await MikroORM.init(config);
    }
    return global.__MikroORM__;
}

export async function getEMFork() {
    const orm = await getORM();
    return orm.em.fork();
}
