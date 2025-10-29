import { DataSource } from 'typeorm';

export default new DataSource({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: ['**/*.entity.js'],
    migrations: ["src/migration/*.ts"],
});