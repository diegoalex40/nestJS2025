import { Body, Controller, Param, ParseIntPipe, Get, Post } from '@nestjs/common';
import {User} from './users.entity';
import {UsersService} from './users.service';
import {UserDto} from './user.dto'

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
    create(@Body() userDto: UserDto): Promise<User> {
        const user = new User();
        user.name = userDto.name;
        user.last_name = userDto.last_name;
        user.email = userDto.email;
        user.birthday = new Date(userDto.birthday);
        user.identification = userDto.identification;
        return this.userService.create(user);
    }

    
}
