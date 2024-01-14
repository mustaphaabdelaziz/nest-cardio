import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { CreatePatientDto } from './dto/createPatient.dto';
import { UpdatePatientDto } from './dto/updatePatient.dto';
import { PatientService } from './patient.service';
import { Patient } from './schemas/patient.schema';

@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}
  @Get()
  async findAll(@Query() query: ExpressQuery): Promise<Patient[]> {
    return await this.patientService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(@Body() patient: CreatePatientDto, @Req()req ): Promise<Patient> {
    console.log(req.user)
    return this.patientService.create(patient,req.user);
  }
  @Get(':id')
  async findPatientById(@Param('id') id: string): Promise<Patient> {
    return this.patientService.findPatientById(id);
  }
  @Put('id')
  async update(
    @Param('id') id: string,
    @Body() patient: UpdatePatientDto,
  ): Promise<Patient> {
    return this.patientService.updatePatientById(id, patient);
  }
  @Delete(':id')
  async deletePatientById(@Param('id') id: string) {
    return this.patientService.deletePatientById(id);
  }
}
