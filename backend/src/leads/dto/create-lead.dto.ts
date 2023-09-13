import { IsBoolean, IsEmail, IsMongoId, IsNotEmpty } from "class-validator";

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

  // @IsIn(["on", "off"])
  @IsBoolean()
  interested_in_finance: boolean;

  // @IsIn(["on", "off"])
  @IsBoolean()
  trade_in: boolean;

  @IsNotEmpty()
  @IsMongoId()
  productId: string;
}
