import { IsEmpty, IsNotEmpty, Length } from 'class-validator';
import { User } from 'src/auth/schema/user.schema';

export class CreatePatientDto {
  @IsNotEmpty({ message: 'This could not be empty' })
  @Length(3, 255)
  readonly firstname: string;

  @IsNotEmpty({ message: 'This could not be empty' })
  @Length(3, 255)
  readonly lastname: string;

  @IsNotEmpty({ message: 'This could not be empty' })
  readonly parent: {
    father: string;
    mother: string;
  };

  @IsNotEmpty({ message: 'This could not be empty' })
  readonly birthdate: string;
  readonly blood: {
    groupe: string;
    rhesus: string;
  };

  @IsNotEmpty({ message: 'This could not be empty' })
  readonly phone: [string];

  @IsNotEmpty({ message: 'This could not be empty' })
  readonly gender: string;

  @IsNotEmpty({ message: 'This could not be empty' })
  readonly address: {
    wilaya: string;
    city: string;
  };
  readonly medecinref: string;
  @IsEmpty({message:"you cannot pass a user id"})
  readonly createdBy: User;

}
