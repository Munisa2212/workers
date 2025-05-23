import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFaqDto {
    @ApiProperty({example: "Question"})
    @IsString()
    question: string

    @ApiProperty({example: "Answer"})
    @IsString()
    answer: string
}
