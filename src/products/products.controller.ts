import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('products')
export class ProductsController {
    @Get('inventario')
    getHelloInProducts(): string{
        return "Estamos en productos con una funcionalidad nueva!!"
    }
//Recibir un parametro en la URL
    // @Get(':id')
    // find(@Param() params) {
    //     return `Estas consultando el producto ${params.id}`;
    // }

//RECIBIR VARIOS PARAMETROS EN LA URL

    // @Get(':id/:size')
    // findWithSize( @Param() params) {
    //     return `productos con id: ${params.id} ----- size: ${params.size}`;
    // }

//DESESTRUCTURAR PARAMETROS DE URL

    @Get(':id')
    find(@Param('id') id: number) {
        return `Pagina del producto ${id}`;
    }

//RECIBIR VARIOS PARAMETROS EN LA URL TIPADOS Y DESAGREGADOS

    @Get(':id/:size')
    findWithSize( @Param('id') id: number, @Param('size') size: string) {
        return `productos con id: ${id} ----- size: ${size}`;
    }
}
