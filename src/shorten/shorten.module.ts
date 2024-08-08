import { Module } from '@nestjs/common';
import { ShortenController } from './shorten.controller';
import { ShortenService } from './shorten.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Shorten, ShortenSchema } from './schemas/Shorten.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Shorten.name, schema: ShortenSchema }]),
  ],
  controllers: [ShortenController],
  providers: [ShortenService],
})
export class ShortenModule {}
