import { Injectable } from "@nestjs/common";
import { Command } from "nestjs-command";
import { ProductsService } from "../products.service";

@Injectable()
export class ProductsSeed {
  constructor(private readonly productsService: ProductsService) {}

  @Command({
    command: "create:products",
    describe: "Create products",
  })
  async create() {
    await this.productsService.createMany([
      {
        model: "Harley-Davidson Sportster",
        price: 11340,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Lightweight street bike",
        type: "bike",
      },
      {
        model: "Yamaha MT-07",
        price: 7699,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Versatile road bike",
        type: "bike",
      },
      {
        name: "Brake pad",
        price: 40,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "High friction brake-pad",
        type: "accessory",
      },
      {
        name: "Chain lubricant",
        price: 15,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Moto-specific chain lubricant",
        type: "accessory",
      },
      {
        model: "Ducati Panigale V2",
        price: 16000,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Track-oriented sport bike",
        type: "bike",
      },
      {
        model: "BMW R1250RT",
        price: 22000,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Luxury touring bike",
        type: "bike",
      },
      {
        name: "Helmet",
        price: 250,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "High-quality protective helmet",
        type: "accessory",
      },
      {
        name: "Motorcycle jacket",
        price: 200,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Windproof motorcycle jacket",
        type: "accessory",
      },
      {
        model: "Kawasaki Ninja 300",
        price: 5000,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Popular entry-level sport bike",
        type: "bike",
      },
      {
        model: "Honda CBR600RR",
        price: 12000,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Mid-range sport bike",
        type: "bike",
      },
      {
        model: "Triumph Street Triple",
        price: 10500,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Versatile street bike",
        type: "bike",
      },
      {
        model: "Suzuki Hayabusa",
        price: 14000,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "High-performance sport bike",
        type: "bike",
      },
      {
        model: "Indian Motorcycle Scout Sixty",
        price: 9000,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Midsize cruiser",
        type: "bike",
      },
      {
        name: "Motorcycle Gloves",
        price: 50,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Protective gloves",
        type: "accessory",
      },
      {
        name: "Motorcycle Boots",
        price: 120,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Riding boots",
        type: "accessory",
      },
      {
        name: "Handlebar Grips",
        price: 20,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Improved grip handlebar grips",
        type: "accessory",
      },
      {
        name: "Saddlebags",
        price: 200,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Storage for long trips",
        type: "accessory",
      },
      {
        name: "Windshield",
        price: 150,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Protection from wind and debris",
        type: "accessory",
      },
      {
        model: "Yamaha YZF-R1",
        price: 17000,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "One of the top sport bikes in the market",
        type: "bike",
      },
      {
        model: "BMW S1000RR",
        price: 18500,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Superbike with BMW's innovative technology",
        type: "bike",
      },
      {
        model: "Ducati Monster",
        price: 12000,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Most recognized Ducati's model",
        type: "bike",
      },
      {
        model: "Kawasaki Z1000",
        price: 13000,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "High-performance standard bike",
        type: "bike",
      },
      {
        model: "MV Agusta Brutale 800",
        price: 15000,
        image:
          "https://cdn.visordown.com/styles/amp_1200/s3/field/image/harley-davidson-fat-boy_0.jpg",
        description: "Prestigious Italian sport bike",
        type: "bike",
      },
      {
        name: "Chain Cleaner",
        price: 12,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Keeps the chain clean for optimal performance",
        type: "accessory",
      },
      {
        name: "Seat Cover",
        price: 50,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Improves riding comfort and aesthetics",
        type: "accessory",
      },
      {
        name: "Exhaust Pipe",
        price: 250,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Enhances looks and sound of the bike",
        type: "accessory",
      },
      {
        name: "Frame Sliders",
        price: 60,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Protection for the frame in case of a slide",
        type: "accessory",
      },
      {
        name: "Tank Pad",
        price: 20,
        image:
          "https://m.media-amazon.com/images/I/51oZsXMOXJL._AC_UF1000,1000_QL80_.jpg",
        description: "Helps to prevent scratches on the fuel tank",
        type: "accessory",
      },
    ]);
  }
}
