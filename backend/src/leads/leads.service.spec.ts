import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Product } from "./../products/entities/product.entity";
import { ProductsModule } from "./../products/products.module";
import { Lead } from "./entities/lead.entity";
import { LeadsService } from "./leads.service";

describe("LeadsService", () => {
  let service: LeadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LeadsService,
        {
          provide: getRepositoryToken(Lead),
          useValue: jest.fn(),
        },
        ProductsModule,
        {
          provide: getRepositoryToken(Product),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<LeadsService>(LeadsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
