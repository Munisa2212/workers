import { ApiProperty } from "@nestjs/swagger"
import { userRole, userStatus } from "@prisma/client"
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator"

export class RegisterUserDto {
    @ApiProperty({ example: 'Munisa Ibodullayeva' })
    @IsString()
    @IsNotEmpty()
    fullName: string;
  
    @ApiProperty({ example: 'StrongPassword123!' })
    @IsString()
    password: string;
  
    @ApiProperty({ example: '+998901234567' })
    @IsString()
    phoneNumber: string;
  
    @ApiProperty({ example: 5 })
    @IsNumber()
    regionId: number;
  
    @ApiProperty({ example: '123456789012', required: false })
    @IsOptional()
    @IsString()
    IIN?: string;
  
    @ApiProperty({ example: '123456', required: false })
    @IsOptional()
    @IsString()
    MFO?: string;
  
    @ApiProperty({ example: '12345678901234567890', required: false })
    @IsOptional()
    @IsString()
    RS?: string;
  
    @ApiProperty({ example: 'Asaka Bank', required: false })
    @IsOptional()
    @IsString()
    Bank?: string;
  
    @ApiProperty({ example: '12345', required: false })
    @IsOptional()
    @IsString()
    OKED?: string;
  
    @ApiProperty({ example: 'Yunusobod district, Tashkent' })
    @IsString()
    @IsNotEmpty()
    ADDRESS: string;
  
    @ApiProperty({ example: 'USER', enum: userRole })
    @IsEnum(userRole)
    role: userRole;

    @ApiProperty({example: "ibodullayevamunisa570@gmail.com"})
    @IsString()
    email: string
  }
  

  export class PhoneCheckDto {
    @ApiProperty({ example: '+998901234567' })
    @IsString()
    phoneNumber: string;

    @ApiProperty({example: "ibodullayevamunisa570@gmail.com"})
    @IsString()
    email: string
  }
  

  export class VerifyOtpDto {
    @ApiProperty({ example: '+998901234567' })
    @IsString()
    phoneNumber: string;

    @ApiProperty({example: "ibodullayevamunisa570@gmail.com"})
    @IsString()
    email: string
  
    @ApiProperty({ example: '123456' })
    @IsString()
    otp: string;
  }
  

  export class LoginUserDto {
    @ApiProperty({ example: '+998901234567' })
    @IsString()
    phoneNumber: string;

    @ApiProperty({example: "ibodullayevamunisa570@gmail.com"})
    @IsString()
    email: string
  
    @ApiProperty({ example: 'StrongPassword123!' })
    @IsString()
    password: string;
  }
  