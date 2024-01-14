import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

@Schema({
  timestamps: true,
})
export class Patient {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;
  @Prop({ required: true })
  birthdate: string;
  @Prop({ type: [String], required: true })
  phone: string[];
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;
}
export const PatientSchema = SchemaFactory.createForClass(Patient);
