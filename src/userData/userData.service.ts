import { Injectable } from '@nestjs/common';
import {  Role } from 'src/constants';
import { UserData } from './userData.entity';

@Injectable()
export class UserDataService {
  public users: UserData[] = [
    {
      username: 'user1',
      password: '123',
      email: 'user@gmail.com',
      age: 23,
      role:Role.ANDROID_DEVELOPER,
    },

    {
      username: 'user2',
      password: '123',
      email: 'user@gmail.com',
      age: 23,
      role:Role.WEB_DEVELOPER
    },
    {
      username: 'user3',
      password: '123',
      email: 'user@gmail.com',
      age: 23,
      role:Role.ANDROID_DEVELOPER
    },
  ];

  getUserByName(username: string): UserData {
    
            return   this.users.find((user) => user.username === username);
  }
}
