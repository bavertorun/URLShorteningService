import { Module } from '@nestjs/common';
import { ShortenModule } from './shorten/shorten.module';

@Module({
  imports: [ShortenModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
