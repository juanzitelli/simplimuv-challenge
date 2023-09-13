import { ObjectId } from "mongodb";
import { Column, Entity, JoinColumn, ManyToOne, ObjectIdColumn } from "typeorm";
import { Product } from "../../products/entities/product.entity";

@Entity()
export class Lead {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ default: false })
  interested_in_finance: boolean;

  @Column({ default: false })
  trade_in: boolean;

  @Column()
  // objectId reference to Product entity
  productId: ObjectId;

  // Define relation with Product entity
  @ManyToOne(() => Product, (product) => product)
  @JoinColumn({ name: "productId" })
  product: Product;
}
