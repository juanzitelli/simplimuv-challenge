import { findProductById } from "@/sdk/products";
import styles from "./SingleProductLayout.module.css";

const SingleProductLayoutPage = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  const product = await findProductById(params.id);

  return (
    <div className={styles.container}>
      <h1>
        {product.type === "bike" ? `🏍️ ${product.model}` : `📦 ${product.name}`}
      </h1>
      <h2>{product.description}</h2>
      {children}
    </div>
  );
};

export default SingleProductLayoutPage;
