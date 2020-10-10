import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy;

export const LoginOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'iamreyfuertes61085',
  database: 'l2jls',
  entities: [__dirname + 'dist/../**/*.entity.{js,ts}'],
  // synchronize: false,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
}
export const GameOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'iamreyfuertes61085',
  database: 'l2jgs',
  entities: [__dirname + 'dist/../**/*.entity.{js,ts}'],
  // synchronize: false,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
}



// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'db-postgresql-sgp1-32387-do-user-7167088-0.a.db.ondigitalocean.com',
//   port: 25060,
//   username: 'doadmin',
//   password: 'ikl60wdvdpez9xbj',
//   database: 'importleads',
//   entities: [__dirname + 'dist/../**/*.entity.{js,ts}'],
//   ssl: true,
//   synchronize: false,
//   logging: false,
//   namingStrategy: new SnakeNamingStrategy(),
// }