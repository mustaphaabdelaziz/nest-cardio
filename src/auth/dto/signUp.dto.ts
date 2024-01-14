import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'Name could not be empty' })
  @IsString()
  readonly name: string;

  @IsNotEmpty({ message: 'Email could not be empty' })
  @IsEmail()
  readonly email: string;

  @IsNotEmpty({ message: 'Password could not be empty' })
  @MinLength(6)
  @IsString()
  readonly password: string;
}
