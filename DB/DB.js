const { Client } = require('pg');

exports.shards = [
    new Client({
        user: 'postgres',
        password: '0000',
        database: 'postgres',
        host: 'localhost',
        port: 5432,
        connectionTimeoutMillis: 10000
    }),
    new Client({
        user: 'postgres',
        password: '0000',
        database: 'postgres',
        host: 'localhost',
        port: 5433,
        connectionTimeoutMillis: 10000
    }),
    new Client({
        user: 'postgres',
        password: '0000',
        database: 'postgres',
        host: 'localhost',
        port: 5434,
        connectionTimeoutMillis: 10000
    })
];

exports.connect = async function () {
    await this.shards[0].connect();
    await this.shards[1].connect();
    await this.shards[2].connect();
}

exports.URL = class URL {
    constructor(url, hash) {
        this.url = url;
        this.hash = hash;
    }

    async save(server) {
        try {
            await server.query('INSERT INTO URL_TABLE(url, hash) VALUES($1, $2)', [this.url, this.hash]);
        } catch (e) {
            console.log(e);
        }
    }
    static async find(hash, server) {
        try {
            var x = await server.query('SELECT url FROM URL_TABLE WHERE hash = $1', [hash]);
        } catch (e) {
            console.log(e);
        }
        return x.rows[0];
    }
}