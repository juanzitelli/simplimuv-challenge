const BASE_URL = `${process.env.API_URL}/leads`;

export type PostLeadPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  interested_in_finance: string;
  trade_in: string;
  productId: string;
};

export const postLead = async ({
  formData,
}: {
  formData: FormData;
}): Promise<void> => {
  await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      interested_in_finance: formData.get("interested_in_finance") as string,
      trade_in: formData.get("trade_in") as string,
      productId: formData.get("productId") as string,
    } satisfies PostLeadPayload),
  });
};
