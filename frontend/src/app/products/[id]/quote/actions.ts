"use server";

import { redirect } from "next/navigation";
import {
  object,
  string,
  minLength,
  email,
  nullable,
  enumType,
  length,
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
  interested_in_finance: nullable(enumType(["on", "off"])),
  trade_in: nullable(enumType(["on", "off"])),
  productId: string([length(24, "Product ID should be 24 chars long")]),
});

export async function postLead(formData: FormData) {
  const form = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    interested_in_finance: formData.get("interested_in_finance"),
    trade_in: formData.get("trade_in"),
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
