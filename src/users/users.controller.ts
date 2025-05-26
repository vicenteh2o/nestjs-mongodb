import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";

@Controller('users')
export class UsersController {
    constructor (private usersService: UsersService) {}
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.usersService.createUser(createUserDto);
    }

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(id);
    }
}