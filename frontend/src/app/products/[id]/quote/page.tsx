import { findProductById } from "@/sdk/products";
import { Form } from "./Form";

const GetQuotePage = async ({ params }: { params: { id: string } }) => {
  const data = await findProductById(params.id);

  return (
    <>
      <Form product={data} />
    </>
  );
};

export default GetQuotePage;
