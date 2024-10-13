import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Review extends Document {
  @Prop({ required: true })
  Product: number;

  @Prop([{ title: String, text: String }])
  Reviews: Array<{ title: string; text: string }>;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
