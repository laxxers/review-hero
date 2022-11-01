import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();

const source = new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_MA<E'),
  entities: ['src/**/*.entity{.ts,.js}'],
  subscribers: ['src/**/*.subscriber{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
});

export default source;
