import { DataSource } from 'typeorm';
export default new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    host: 'dpg-d44qb9odl3ps73bholmg-a.oregon-postgres.render.com',
    port: 5432,
    username: 'vehicle_db_02_user',
    password: 'dBrcppUjN6ttz120l5zy94nDTKrSqdg5',
    database: 'vehicle_db_02',
    synchronize: false,
    logging: true,
    entities: ['**/*.entity.ts'],
    migrations: ['src/migration/*.ts'],

});