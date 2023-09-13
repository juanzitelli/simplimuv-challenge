import { findAllPaginatedProducts } from "@/sdk/products";
import { Paginator } from "@/components/Paginator/Paginator";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import styles from "./ProductsPage.module.css";

type Product = {
  _id: string;
  image: string;
  description: string;
  price: string;
} & ({ type: "bike"; model: string } | { type: "accessory"; name: string });

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: {
    pageSize: string;
    type: string;
    page: string;
  };
}) => {
  const params = new URLSearchParams(searchParams);

  const pageSize = params.get("pageSize") || "10";
  const type = params.get("type") || "all";

  const data = await findAllPaginatedProducts(params);

  return (
    <>
      <h1>Products page</h1>
      <div className={styles.container}>
        {data.products.length > 0 ? (
          data.products.map((product: Product, key: number) => {
            return (
              <ProductCard
                data-testid={key}
                data-productid={key}
                key={product._id}
                product={product}
              />
            );
          })
        ) : (
          <div>There are no products we can show you at the moment</div>
        )}
      </div>
      <Paginator
        currentPage={data.currentPage}
        nextPage={data.nextPage}
        prevPage={data.prevPage}
        type={type}
        pageSize={pageSize}
      />
    </>
  );
};

export default ProductsPage;
