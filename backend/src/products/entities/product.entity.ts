import {
  Column,
  Entity,
  JoinColumn,
  ObjectId,
  ObjectIdColumn,
  OneToMany,
} from "typeorm";
import { Lead } from "./../../leads/entities/lead.entity";

export type ProductType = "bike" | "accessory";

@Entity()
export abstract class Product {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column({ enum: ["bike", "accessory"] })
  type: ProductType;

  @Column()
  name?: string;

  @Column()
  model?: string;

  @OneToMany(() => Lead, (lead) => lead.product)
  @JoinColumn({ name: "productId" })
  leads?: Array<Lead>;
}
