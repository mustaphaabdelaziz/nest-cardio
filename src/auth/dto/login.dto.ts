import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Email could not be empty' })
  @IsEmail()
  readonly email: string;

  @IsNotEmpty({ message: 'Password could not be empty' })
  @MinLength(6)
  readonly password: string;
}
