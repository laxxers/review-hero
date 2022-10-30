import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_MA<E'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        subscribers: ['dist/**/*.subscriber{.ts,.js}'],
        migrations: ['dist/database/migrations/*{.ts,.js}'],
      }),
    }),
  ],
})
class DatabaseModule {}

export default DatabaseModule;
