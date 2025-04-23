import { Body, Controller, Param, ParseIntPipe, Get, Post } from '@nestjs/common';
import {User} from './users.entity';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService : UsersService) {}

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<User>{
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() user : User): Promise<User> {
        return this.userService.create(user);
    }
}
