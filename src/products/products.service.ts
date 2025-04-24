import { Injectable } from '@nestjs/common';
import { Product } from './interface/product/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
      @InjectRepository(ProductEntity)
      private productsRepository: Repository<ProductEntity>,
    ){}
    private products: Product[]

    async getAll(): Promise<Product[]> {
        const productsEntity: ProductEntity[] = await this.productsRepository.find();
        return productsEntity.map(({ id, name, description }) => ({ id, name, description }));
    }

    //READ
    async getId(id: number): Promise<Product | undefined> {
      const productEntity = await this.productsRepository.findOne({ where: { id } });
      if (productEntity) {
          return { id: productEntity.id, name: productEntity.name, description: productEntity.description };
      }
      return undefined;
  }

    //CREATE
    async insert(body: any): Promise<ProductEntity> { // Recibe un objeto genérico y guarda una ProductEntity
      const productEntity = this.productsRepository.create(body);
      return this.productsRepository.save(productEntity);
    }

    //UPDATE
    async update(id: number, body: any): Promise<void>{
      await this.productsRepository.update(id, body);
    }

    //DELETE
    async delete(id: number): Promise<void> {
      await this.productsRepository.delete(id);
    }
}
