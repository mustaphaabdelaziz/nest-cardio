import { IsEmpty, IsOptional, IsString } from 'class-validator';
import { User } from 'src/auth/schema/user.schema';

export class UpdatePatientDto {
  @IsOptional()
  @IsString()
  readonly firstname: string;

  @IsOptional()
  @IsString()
  readonly lastname: string;

  @IsOptional()
  readonly parent: {
    father: string;
    mother: string;
  };

  @IsOptional()
  @IsString()
  readonly birthdate: string;

  @IsOptional()
  readonly blood: {
    groupe: string;
    rhesus: string;
  };

  @IsOptional()
  @IsString()
  readonly phone: [string];

  @IsOptional()
  @IsString()
  readonly gender: string;

  @IsOptional()
  readonly address: {
    wilaya: string;
    city: string;
  };
  @IsOptional()
  @IsString()
  readonly medecinref: string;
  @IsEmpty({message:"you cannot pass a user id"})
  readonly createdBy: User;
}
