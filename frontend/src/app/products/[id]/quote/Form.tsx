"use client";

import { Input } from "@/components/Input/Input";
import { QuoteSubmitButton } from "@/components/QuoteSubmitButton/QuoteSubmitButton";
import { Product } from "@/sdk/products";
import { useState } from "react";
import styles from "./GetQuotePage.module.css";
import { postLead } from "./actions";

export const Form = ({ product }: { product: Product }) => {
  const [errors, setErrors] = useState<string | null>(null);

  const onCreate = async (formData: FormData) => {
    const formResponse = await postLead(formData);

    if (formResponse) {
      setErrors(formResponse);
    }
  };

  return (
    <form action={onCreate} className={styles.form}>
      <Input label="First Name" type="text" name="first_name" id="first_name" />
      <Input label="Last name" type="text" name="last_name" id="last_name" />
      <Input label="Email" type="email" name="email" id="email" />
      <Input label="Phone" name="phone" id="phone" />

      {product.type === "bike" ? (
        <>
          <Input
            label="Trade in"
            type="checkbox"
            name="trade_in"
            id="trade_in"
            defaultChecked={true}
          />
          <Input
            label="Interested in finance"
            type="checkbox"
            name="interested_in_finance"
            id="interested_in_finance"
          />
        </>
      ) : null}

      {
        <span data-testid={"error-messages"} className={styles.errors}>
          {errors}
        </span>
      }

      <input
        type="hidden"
        name="productId"
        id="productId"
        value={product._id}
      />

      <QuoteSubmitButton data-testid={"submit-button"} />
    </form>
  );
};
