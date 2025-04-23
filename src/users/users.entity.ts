import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number; //Agregar despues uuidV4

    @Column('varchar', {length: 50})
    name: string;

    @Column('varchar', {length: 50})
    last_name: string;

    @Column('varchar', {length: 50})
    email: string;

    @Column()
    birthday: Date;

    @Column('int', { width: 10})
    identification: number;
}