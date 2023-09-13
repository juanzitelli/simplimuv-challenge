import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Product } from "./../products/entities/product.entity";
import { ProductsController } from "./../products/products.controller";
import { ProductsService } from "./../products/products.service";
import { Lead } from "./entities/lead.entity";
import { LeadsController } from "./leads.controller";
import { LeadsService } from "./leads.service";

describe("LeadsController", () => {
  let controller: LeadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [LeadsController, ProductsController],
      providers: [
        LeadsService,
        {
          provide: getRepositoryToken(Lead),
          useValue: jest.fn(),
        },
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    controller = module.get<LeadsController>(LeadsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
