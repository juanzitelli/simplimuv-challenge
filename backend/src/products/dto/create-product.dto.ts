import { IsIn, IsNotEmpty } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsIn(["bike", "accessory"])
  type: "bike" | "accessory";

  name?: string;
  model?: string;
}
