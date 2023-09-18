const BASE_URL = `${process.env.API_URL}/products`;

type FindAllPaginatedProductsResponse = {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  products: Array<Product>;
} & {};

export const findAllPaginatedProducts = async (
  params: URLSearchParams
): Promise<FindAllPaginatedProductsResponse> => {
  const res = await fetch(`${BASE_URL}?${params.toString()}`);
  const data = (await res.json()) as FindAllPaginatedProductsResponse;

  return data;
};
export const findProductById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data = (await res.json()) as Product;

  return data;
};

export type Product = {
  _id: string;
  image: string;
  description: string;
  price: string;
} & ({ type: "bike"; model: string } | { type: "accessory"; name: string });
