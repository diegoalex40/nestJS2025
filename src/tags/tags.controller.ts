import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {TagsService} from './tags.service'
import { TagDto } from './dto/tag.dto';
import { Tag } from './tag/tag.interface';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}

    //USO DE GET EN ERRORES PERSONALIZADOS
    @Get(':id')
    async find(@Param('id') id: string) {
        console.log(id, typeof id);
        return this.tagsService.getId(id);
    }
    
    //Uso de ValidationPipe por ruta
    @Post()
    @UsePipes(new ValidationPipe())
    post(@Body() body: TagDto): Promise<Tag> {
        return this.tagsService.insert(body);
    }
}
