import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/creat-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @Get()
    getUser() {
        return this.usersService.getUser();
    }
}
