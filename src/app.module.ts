import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rodrigozamb:rodrigo123@nestjs30min.w2fc9.mongodb.net/test'),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
