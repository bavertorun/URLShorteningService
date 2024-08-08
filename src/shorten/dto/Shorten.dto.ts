import { IsNotEmpty } from "class-validator";

export class ShortenDTO{
    @IsNotEmpty()
    longUrl: string;
}