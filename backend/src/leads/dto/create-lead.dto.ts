import { IsEmail, IsIn, IsMongoId, IsNotEmpty } from "class-validator";

export class CreateLeadDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsIn(["on", "off"])
  interested_in_finance: string;

  @IsIn(["on", "off"])
  trade_in: string;

  @IsNotEmpty()
  @IsMongoId()
  productId: string;
}
