import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ObjectId } from "mongodb";
import { Repository } from "typeorm";
import { Product } from "./../products/entities/product.entity";
import { CreateLeadDto } from "./dto/create-lead.dto";
import { Lead } from "./entities/lead.entity";

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private leadsRepository: Repository<Lead>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(createLeadDto: CreateLeadDto): Promise<Lead | null> {
    try {
      const newLead = new Lead();
      newLead.email = createLeadDto.email;
      newLead.first_name = createLeadDto.first_name;
      newLead.last_name = createLeadDto.email;
      newLead.interested_in_finance =
        createLeadDto.interested_in_finance === "on";
      newLead.trade_in = createLeadDto.trade_in === "on";
      newLead.phone = createLeadDto.phone;

      const product = await this.productsRepository.findOne({
        where: {
          _id: new ObjectId(createLeadDto.productId),
        },
      });

      newLead.product = product;

      return await this.leadsRepository.save(newLead);
    } catch (error) {
      console.log("create error ==> ", error);
    }
  }

  async findAll(): Promise<Lead[]> {
    return this.leadsRepository.find();
  }
}
