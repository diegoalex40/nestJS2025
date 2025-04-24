import { IsDateString, IsEmail, IsNotEmpty, IsNumber } from "class-validator";


export class UserDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    last_name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsDateString()
    birthday: string;

    @IsNumber()
    identification: number;
}
