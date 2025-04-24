import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity('my_products')
export class ProductEntity {
    @PrimaryColumn()
    id: number;

    @Column('int')
    name: string;
  
    @Column('varchar', {length: 50})
    description: string;
  
    @Column('int', {width: 5})
    stock: number;
}