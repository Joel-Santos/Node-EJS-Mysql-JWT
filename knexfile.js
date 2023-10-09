module.exports = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'senac@1',
        database: 'escola'
    },
    migrations: {
        directory: './src/connection/database',
        tableName: 'knex_migrations'
    },
    seeds: {
        directory: './src/connection/seeds'
    }

    };