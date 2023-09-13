import Image from "next/image";
import Link from "next/link";
import styles from "./SingleProductPage.module.css";
import { findProductById } from "@/sdk/products";
import { Button } from "@/components/Button/Button";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await findProductById(params.id);

  return (
    <div className={styles.gridWrapper}>
      <Image
        src={product.image}
        height={300}
        width={300}
        alt={product.type === "accessory" ? product.name : product.model}
        className={styles.imageStyle}
      />
      <div className={styles.priceContainer}>
        <h2 className={styles.priceHeader}>Full price:</h2>
        <span className={styles.price}>
          {Number(product.price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
        <Link href={`/products/${params.id}/quote`}>
          <Button data-testid={"quote-button"}>
            {product.type === "bike" ? "Get quote" : "Purchase"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProductPage;
