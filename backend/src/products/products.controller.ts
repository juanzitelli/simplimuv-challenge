import {
  Body,
  Controller,
  Get,
  Param,
  ParseEnumPipe,
  ParseIntPipe,
  Post,
  Query,
} from "@nestjs/common";
import { ObjectId, ObjectId as ObjectIdType } from "mongodb";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(
    @Query("pageSize", new ParseIntPipe()) pageSize: number,
    @Query("page", new ParseIntPipe()) page: number,
    @Query("type", new ParseEnumPipe(["bike", "all", "accessory"]))
    type: "bike" | "all" | "accessory",
  ) {
    try {
      const params = new URLSearchParams();
      params.append("pageSize", pageSize.toString());
      params.append("page", page.toString());
      params.append("type", type);

      return this.productsService.findAllPaginated(params.toString());
    } catch (error) {
      return {
        error,
      };
    }
  }

  @Get(":id")
  async findOne(@Param("id") id: ObjectIdType) {
    try {
      return await this.productsService.findOne(new ObjectId(id));
    } catch (error) {
      return {
        error,
      };
    }
  }

  @Post("/create")
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productsService.create(createProductDto);
    } catch (error) {
      console.error("Controller Error ===>", error);
      return {
        error,
      };
    }
  }

  @Post("/create-many")
  async createMany(@Body() createManyProductDto: Array<CreateProductDto>) {
    try {
      return await this.productsService.createMany(createManyProductDto);
    } catch (error) {
      console.error("Controller Error ===>", error);
      return {
        error,
      };
    }
  }
}
