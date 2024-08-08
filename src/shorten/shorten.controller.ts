import { Body, Controller, Post } from '@nestjs/common';
import { ShortenService } from './shorten.service';
import { ShortenDTO } from './dto/Shorten.dto';

@Controller('shorten')
export class ShortenController {
    constructor(private readonly shortenService: ShortenService){}
    @Post()
    async shortUrl(@Body() body:ShortenDTO){
        return this.shortenService.shortUrl(body)
    }
}
