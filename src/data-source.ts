import { DataSource } from 'typeorm';
export default new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: ['**/*.entity.js'],
    migrations: ['src/migration/*.ts'],
    ssl: {
        rejectUnauthorized: false,
    },
});