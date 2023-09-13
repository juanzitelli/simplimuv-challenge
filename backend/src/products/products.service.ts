import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  FindOptionsOrder,
  FindOptionsWhere,
  ObjectId as ObjectIdType,
  Repository,
} from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product, ProductType } from "./entities/product.entity";

export type PaginatedResponse = {
  products: Product[];
  count: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  lastPage: number;
};

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(id: ObjectIdType): Promise<Product | null> {
    return await this.productsRepository.findOne({
      where: {
        _id: id,
      },
    });
  }

  async create(product: CreateProductDto): Promise<Product | null> {
    return await this.productsRepository.save(product);
  }

  async createMany(
    products: Array<CreateProductDto>,
  ): Promise<Array<Product> | null> {
    return this.productsRepository.save(products);
  }

  getPaginateSearchOptions({
    type,
  }: {
    type: ProductType | "all" | undefined;
  }) {
    let where: FindOptionsWhere<Product> | null = {};
    let order: FindOptionsOrder<Product> | null = {};

    switch (type) {
      case "accessory": {
        where = { type };
        order = { description: "DESC" };
        break;
      }
      case "bike": {
        where = { type };
        order = { model: "DESC" };
        break;
      }
      case "all": {
        order = { description: "DESC", model: "DESC" };
        break;
      }

      default:
        break;
    }

    return { where, order };
  }

  paginateResponse(
    products: [Array<Product>, number],
    page: number,
    pageSize: number,
  ): PaginatedResponse {
    const [result, count] = products;
    const lastPage = Math.ceil(count / pageSize);
    const nextPage = page + 1 > lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;
    return {
      products: result,
      currentPage: page,
      count,
      nextPage,
      prevPage,
      lastPage,
    } as const;
  }

  async findAllPaginated(query: string): Promise<PaginatedResponse> {
    try {
      const params = new URLSearchParams(query);
      const pageSize = parseInt(params.get("pageSize")) || 10;
      const page = parseInt(params.get("page")) || 1;
      const skip = (page - 1) * pageSize;

      const paramType = params.get("type") as ProductType | "all";

      const type = paramType || "all";

      const { order, where } = this.getPaginateSearchOptions({
        type,
      });

      const result = await this.productsRepository.findAndCount({
        where,
        order,
        take: pageSize,
        skip: skip,
      });

      return this.paginateResponse(result, page, pageSize);
    } catch (error) {}
  }
}
