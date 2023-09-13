import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./../products/entities/product.entity";
import { Lead } from "./entities/lead.entity";
import { LeadsController } from "./leads.controller";
import { LeadsService } from "./leads.service";

@Module({
  imports: [TypeOrmModule.forFeature([Lead, Product])],
  controllers: [LeadsController],
  providers: [LeadsService],
})
export class LeadsModule {}
