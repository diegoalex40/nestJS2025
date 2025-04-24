import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number; //Agregar despues uuidV4

    @Column('varchar', {length: 50, nullable: false})
    name: string;

    @Column('varchar', {length: 50, nullable: false})
    last_name: string;

    @Column('varchar', {length: 50, nullable: false})
    email: string;

    @Column({nullable: false})
    birthday: Date;

    @Column('int', { width: 10, nullable: false})
    identification: number;
}