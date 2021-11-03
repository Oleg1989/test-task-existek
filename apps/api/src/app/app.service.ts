import { Injectable } from '@nestjs/common';
import { Message } from '@test-task-existek/api-interfaces';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) { }
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
