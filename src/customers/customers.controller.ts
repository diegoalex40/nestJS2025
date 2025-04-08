import { Controller, Query, Get, ParseIntPipe } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    //USAR QUERY
    @Get('query')
    rutaQuery(@Query() query) {
        return `El dato query.x ha recibido el valor ${query.x} y el valor de y es: ${query.y}`;
    }

    @Get('car')
    carQuery(@Query('count') carCount: number) {
        return `CarCount: ${carCount}`;
    }

    @Get('cars')
    carsQuery(@Query('count', ParseIntPipe) carCount: number) {
        return `CarCount: ${carCount}`;
    }
}
