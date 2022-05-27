import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { environment } from './environment/environment';
import { config } from 'dotenv';
config();
const ormConfig = {
  ...environment.database,
  entities: [User],
} as TypeOrmModuleOptions;

console.log('ormConfig', ormConfig);
@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
