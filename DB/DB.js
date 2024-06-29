const DB = require('pg');

let shard1 = new DB.Connection({
    user: 'postgres',
    password: '0000',
    database: 'pgshard1',
    host: 'localhost',
    port: 5432
});

let shard2 = new DB.Connection({
    user: 'postgres',
    password: '0000',
    database: 'pgshard1',
    host: 'localhost',
    port: 5432
});

let shard3 = new DB.Connection({
    user: 'postgres',
    password: '0000',
    database: 'pgshard1',
    host: 'localhost',
    port: 5432
});