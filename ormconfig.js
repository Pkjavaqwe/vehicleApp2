/*module.exports = {
  type: 'sqlite',
  database: 'db.sqlite',
  synchronize: false,
  entities: ['**/ /*.entity.js'],
};
*/
import * as dotenv from 'dotenv';
dotenv.config();
var dbConfig = {
  synchronize: false,
};
switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/ /*.entity.js'],
      migrations: ['src/migration/*.ts', 'src/migrations/*.ts'],
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/ /*.entity.ts'],
      migrationsRun: true,
    });
    break;
  case 'production':
    console.log('DATABASE_URL:', process.env.DATABASE_URL);
    Object.assign(dbConfig, {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      migrationsRun: true,
      entities: ['**/*.entity.js'],
      ssl: {
        rejectUnauthorized: false,
      },
    });
    break;
  default:
    throw new Error('Unknown environment');
}
module.exports = dbConfig;
