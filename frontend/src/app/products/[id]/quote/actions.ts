"use server";

import { redirect } from "next/navigation";
import {
  boolean,
  email,
  minLength,
  nullable,
  object,
  string
} from "valibot";

const LeadSchema = object({
  first_name: string([
    minLength(2, "First name should be at least 2 characters long"),
  ]),
  last_name: string([
    minLength(2, "Last name should be at least 2 characters long"),
  ]),
  email: string([email()]),
  phone: string(),
  interested_in_finance: nullable(boolean()),
  trade_in: nullable(boolean()),
  productId: string(),
});

export async function postLead(formData: FormData) {
  const interestedInFinance = formData.get("interested_in_finance") === "on";
  const tradeIn = formData.get("trade_in") === "on";

  const form = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    interested_in_finance: interestedInFinance,
    trade_in: tradeIn,
    productId: formData.get("productId"),
  };

  const parsedForm = LeadSchema._parse(form);

  if (!parsedForm.issues) {
    await fetch(`${process.env.API_URL}/leads/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedForm.output),
    });

    return redirect(`/products/${parsedForm.output.productId}/thank-you`);
  }

  return parsedForm.issues.map((i) => i.message).join(", ");
}
