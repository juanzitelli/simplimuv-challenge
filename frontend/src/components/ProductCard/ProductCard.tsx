import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

type Product = {
  _id: string;
  image: string;
  description: string;
  price: string;
} & ({ type: "bike"; model: string } | { type: "accessory"; name: string });

export const ProductCard = ({ product, ...rest }: { product: Product }) => {
  return (
    <Link href={`/products/${product._id}`} {...rest}>
      <div className={styles.card}>
        <Image
          width={200}
          height={200}
          className={styles.cardImage}
          src={product.image}
          alt={product.description}
        />
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>
            {product.type === "bike" ? product.model : product.name}
          </h2>
          <p className={styles.cardDescription}>{product.description}</p>
          <p className={styles.cardPrice}>
            {Number(product.price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};
