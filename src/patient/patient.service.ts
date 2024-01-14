import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import * as mongoose from 'mongoose';
import { User } from 'src/auth/schema/user.schema';
import { Patient } from './schemas/patient.schema';
@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name)
    private patientModel: mongoose.Model<Patient>,
  ) {}
  async findAll(query: Query): Promise<Patient[]> {
    const keyword = query.keyword
      ? {
          firstname: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    return await this.patientModel.find({ ...keyword });
  }
  /**
   * Creates a new patient record in the database.
   * @param patient - The patient object that contains the details of the patient to be created.
   * @param user - The user object that represents the user who is creating the patient record.
   * @returns A promise that resolves to the created patient object.
   */
  async create(patient: Patient, user: User): Promise<Patient> {
    const createdBy = user._id;
    const createdPatient = await this.patientModel.create({ ...patient, createdBy });
    return createdPatient;
  }
  async findPatientById(id: string): Promise<Patient> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please provide a correct ID');
    }
    const patient = await this.patientModel.findById(id);
    if (!patient) {
    
      throw new NotFoundException('Patient was not found');
    }
    return patient;
  }
  async updatePatientById(id: string, patient: Patient): Promise<Patient> {
    return await this.patientModel.findByIdAndUpdate(id, patient, {
      new: true,
      runValidators: true,
    });
  }
  async deletePatientById(id: string) {
    return await this.patientModel.findByIdAndDelete(id);
  }
}
