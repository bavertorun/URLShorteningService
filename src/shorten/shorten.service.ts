import { Injectable } from '@nestjs/common';
import { ShortenDTO } from './dto/Shorten.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Shorten } from './schemas/Shorten.schema';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ShortenService {
  constructor(
    @InjectModel(Shorten.name) private readonly shortenModel: Model<Shorten>,
    private readonly configService: ConfigService,
  ) {}
  async shortUrl(body: ShortenDTO) {
    const { longUrl } = body;

    //Is the Url valid ?
    const isUrlValid = this.isURLValid(longUrl);
    if (!isUrlValid)
      throw new Error('Invalid URL. Please enter a valid URL and try again');

    // Has url already been shortened
    const urlExists = await this.shortenModel.findOne({ longUrl });
    if (urlExists)
      return { longUrl: urlExists.longUrl, shortUrl: urlExists.shortUrl };

    // Server base url
    const baseUrl = await this.configService.get<string>('BASE_URL');

    //Unique identifier for the short URL
    const uniqueId = this.generateUniqueId(7);

    // Short Url
    const shortUrl = `${baseUrl}/${uniqueId}`;

    // Save mongodb
    const url = await this.shortenModel.create({ longUrl, shortUrl });

    return url;
  }

  // Fetch URL
  async fetchUrl(uniqueId: string) {
    const baseUrl = this.configService.get<string>('BASE_URL');
    const shortUrl = `${baseUrl}/${uniqueId}`;
    const url = await this.shortenModel.findOne({ shortUrl });
    return url;
  }
  // URL Validation
  isURLValid(longUrl: string) {
    const urlPattern: RegExp = /^(http|https):\/\/[^ "]+$/;
    return urlPattern.test(longUrl);
  }
  // Generate UniqueId
  generateUniqueId(length: number) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
