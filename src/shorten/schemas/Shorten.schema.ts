import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ShortenDocument = HydratedDocument<Shorten>

@Schema()
export class Shorten{
    @Prop({required: true, unique: true})
    longUrl: string
    @Prop({required: true, unique: true})
    shortUrl: string
}

export const ShortenSchema = SchemaFactory.createForClass(Shorten);