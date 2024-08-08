import { Body, Controller, Get, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { ShortenService } from './shorten.service';
import { ShortenDTO } from './dto/Shorten.dto';

@Controller('shorten')
export class ShortenController {
    constructor(private readonly shortenService: ShortenService){}
    @Post()
    async shortUrl(@Body() body:ShortenDTO){
        return this.shortenService.shortUrl(body)
    }
    @Get('/:uniqueId')
    async redirectUrl(@Param('uniqueId') uniqueId: string, @Res() res){
        const url = await this.shortenService.fetchUrl(uniqueId);
        if (!url) throw new NotFoundException({ message: 'Page not found' });
        return res.redirect(url.longUrl);
    }
}
