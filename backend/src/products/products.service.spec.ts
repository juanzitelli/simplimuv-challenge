import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Lead } from "./../leads/entities/lead.entity";
import { LeadsService } from "./../leads/leads.service";
import { Product } from "./entities/product.entity";
import { ProductsService } from "./products.service";

describe("ProductsService", () => {
  let service: ProductsService;
  // let leadsRepository: Repository<Lead>;
  // let productsRepository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        { provide: getRepositoryToken(Product), useValue: jest.fn() },
        LeadsService,
        { provide: getRepositoryToken(Lead), useValue: jest.fn() },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it("should be defined", () => {
    // jest.spyOn(productsRepository, "find").mockResolvedValueOnce([]);
    // jest.spyOn(leadsRepository, "find").mockResolvedValueOnce([]);
    expect(service).toBeDefined();
  });
});
