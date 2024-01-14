import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { PatientSchema } from './schemas/patient.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Patient', schema: PatientSchema }]),
  ],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
