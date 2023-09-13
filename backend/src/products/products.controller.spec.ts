import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { ObjectId } from "mongodb";
import { Lead } from "./../leads/entities/lead.entity";
import { LeadsController } from "./../leads/leads.controller";
import { LeadsService } from "./../leads/leads.service";
import { Product } from "./entities/product.entity";
import { ProductsController } from "./products.controller";
import { PaginatedResponse, ProductsService } from "./products.service";

describe("ProductsController", () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController, LeadsController],
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: jest.fn(),
        },
        LeadsService,
        {
          provide: getRepositoryToken(Lead),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("findOne", () => {
    const result: Product = {
      _id: new ObjectId("64faa87f99f277211d5c898f"),
      description: "Windproof motorcycle jacket",
      image:
        "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
      price: 200,
      type: "accessory",
      name: "Motorcycle jacket",
    };
    it("successfully returns a product", async () => {
      const id = new ObjectId(result._id);
      jest
        .spyOn(service, "findOne")
        .mockImplementation(() => Promise.resolve(result));

      expect(await controller.findOne(id)).toBe(result);
    });

    it("returns an error if service fails", async () => {
      const error = { message: "Error" };
      jest
        .spyOn(service, "findOne")
        .mockImplementation(() => Promise.reject(error));

      expect(await controller.findOne(result._id)).toMatchObject({
        error,
      });
    });
  });

  describe("findAll", () => {
    it("successfully returns the correct amount of products", async () => {
      const result: PaginatedResponse = {
        products: [
          {
            _id: new ObjectId("64faa87f99f277211d5c898f"),
            description: "Windproof motorcycle jacket",
            image:
              "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
            price: 200,
            type: "accessory",
            name: "Motorcycle jacket",
          },
          {
            _id: new ObjectId("64faa8d899f277211d5c8992"),
            description: "Versatile street bike",
            image:
              "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
            price: 10500,
            type: "bike",
            model: "Triumph Street Triple",
          },
        ],
        count: 2,
        prevPage: null,
        nextPage: 2,
        lastPage: 2,
        currentPage: 1,
      };

      jest
        .spyOn(service, "findAllPaginated")
        .mockImplementation(() => Promise.resolve(result));

      expect(await controller.findAll(1, 1, "all")).toEqual(result);
    });
  });
});
