import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id:number): Promise<User> {
        const user= await this.userRepository.findOneBy({id});
        if (!user) {
            throw new NotFoundException(`Usuario con ID: ${id} no encontrado`);
        }
        return user;
    }

    async create(user: User): Promise<User> {
        try{
            const result = await this.userRepository.save(user);
            console.log('Usuario guardado', result)
            return result
        } catch (error) {
            console.error('Error al guardad Usuario', error)
            throw error
        }
    }
}
