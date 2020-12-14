import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import UserEntity from './db/user.entity';

@Module({
  imports: [UserModule,
    TypeOrmModule.forFeature(
      [UserEntity],
    ),

    TypeOrmModule.forRoot(),

    AuthModule,

    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}